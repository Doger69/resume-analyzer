# Resume–Job Match Analyzer 🚀

A professional, ATS-style resume evaluation tool built with **Python, NLP, and Streamlit**.  
This application analyzes how well a resume matches a given job description and provides
actionable insights, visual analytics, and a downloadable PDF report.

## 🔍 Key Features

- 📄 **Resume Parsing (PDF)**
- 🧠 **NLP-based Similarity Analysis (TF-IDF + Cosine Similarity)**
- 🤖 **ATS Compatibility Score**
- 🧩 **Keyword Gap Analysis (Missing Skills)**
- 💡 **Resume Improvement Suggestions**
- 📊 **Modern Dashboard UI**
  - Progress bars
  - Donut chart
  - Card-based layout
  - Professional typography
  
- 📄 **Export Detailed PDF Report**

## 🖥️ Tech Stack

- **Python**
- **Streamlit** – Web UI
- **NLTK** – Text preprocessing
- **Scikit-learn** – TF-IDF & similarity
- **PyPDF2** – Resume text extraction
- **Matplotlib** – Charts & graphs
- **FPDF** – PDF report generation

## 📂 Project Structure
resume_matcher/
│
├── app.py # Main Streamlit application
├── utils.py # NLP, similarity & ATS logic
├── pdf_report.py # PDF report generation
├── requirements.txt # Dependencies
└── README.md

## ▶️ How to Run Locally

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/resume_matcher.git
cd resume_matcher

2️⃣ (Optional) Create Virtual Environment
python -m venv venv
venv\Scripts\activate

3️⃣ Install Dependencies
pip install -r requirements.txt

4️⃣ Run the Application
streamlit run app.py


The app will open at:
http://localhost:8501

🧪 How It Works
Upload a PDF resume
Paste a job description
Click Analyze Match

View:
Match score

ATS score

Missing keywords

Improvement suggestions

Download a professional PDF report
