from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber
import re

app = FastAPI(
    title="Resume Match Analyzer API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def clean_text(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    return text

def extract_keywords(text: str) -> set:
    words = clean_text(text).split()
    return set(words)

@app.post("/analyze")
async def analyze_resume(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):
    # ---- Extract resume text from PDF ----
    resume_text = ""
    with pdfplumber.open(resume.file) as pdf:
        for page in pdf.pages:
            resume_text += page.extract_text() or ""

    # ---- Keyword extraction ----
    resume_keywords = extract_keywords(resume_text)
    job_keywords = extract_keywords(job_description)

    matched_keywords = resume_keywords.intersection(job_keywords)
    missing_keywords = job_keywords.difference(resume_keywords)

    match_percentage = round(
        (len(matched_keywords) / len(job_keywords)) * 100, 2
    ) if job_keywords else 0

    return {
        "filename": resume.filename,
        "match_percentage": match_percentage,
        "matched_keywords_count": len(matched_keywords),
        "missing_keywords_count": len(missing_keywords),
        "missing_keywords_sample": list(missing_keywords)[:15]
    }
