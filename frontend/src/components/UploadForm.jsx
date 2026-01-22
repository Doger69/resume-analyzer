import { useState } from "react";
import { analyzeResume } from "../services/api";

export default function UploadForm({ onResult }) {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!file || !jd) return alert("Upload resume & JD");
    setLoading(true);
    const res = await analyzeResume(file, jd);
    onResult(res);
    setLoading(false);
  };

  return (
    <div className="card">
      <h2>Upload Resume & Job Description</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <textarea
        placeholder="Paste Job Description here..."
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />

      <button onClick={submit}>
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </div>
  );
}
