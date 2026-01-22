# 📄 Resume Match Analyzer (ATS Score Checker)

A full-stack web application that analyzes resumes against job descriptions and calculates an **ATS-style match score**, highlights **missing skills**, and provides **actionable insights** to improve resume shortlisting chances.

## 🚀 Features

✅ Upload resume (PDF)
✅ Paste job description
✅ ATS-style match percentage
✅ Matched vs missing skills detection
✅ Visual score indicator
✅ Dark / Light mode UI
✅ Clean, professional dashboard
✅ FastAPI backend + React frontend

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* CSS (custom dark UI)
* Axios
* Responsive design

### Backend

* FastAPI
* Python
* pdfplumber (PDF text extraction)
* python-multipart
* Uvicorn

---

## 📊 How It Works

1. User uploads a resume (PDF)
2. User pastes a job description
3. Backend extracts text from the resume
4. Keywords are extracted from the job description
5. Resume is compared against job keywords
6. Match score is calculated
7. Missing and matched skills are returned
8. Frontend displays results visually



## 📁 Project Structure

```
resume-analyzer/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── venv/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── UploadForm.jsx
│   │   │   ├── ResultCard.jsx
│   │   │   └── Loader.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── index.html
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/resume-match-analyzer.git
cd resume-match-analyzer
```

---

### 2️⃣ Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

Swagger UI:

```
http://127.0.0.1:8000/docs
```

---

### 3️⃣ Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔗 API Endpoint

### `POST /analyze`

**Form Data:**

* `resume` → PDF file
* `job_description` → string

**Response Example:**

```json
{
  "filename": "CV.pdf",
  "match_percentage": 17.89,
  "matched_keywords_count": 17,
  "missing_keywords_count": 78,
  "missing_keywords_sample": ["aws", "ci/cd", "cloud", "rest"]
}
```

---

## 🎯 Future Enhancements

* Side-by-side Job Description vs Resume keyword highlighting
* Skill categorization (Technical / Cloud / Tools / Soft skills)
* Animated score ring
* Resume improvement suggestions
* PDF preview and downloadable analysis report
* Authentication and user history
* Deployment (Docker / AWS / Vercel)

---

## 👨‍💻 Use Cases

* Students optimizing resumes
* Job seekers preparing for ATS screening
* Resume evaluation tools
* Academic / final year projects

