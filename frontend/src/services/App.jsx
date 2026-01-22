import { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";
import "./App.css";

export default function App() {
  const [result, setResult] = useState(null);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="header">
        <h1>Resume Match Analyzer</h1>
        <button className="dark-toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <UploadForm onResult={setResult} />

      {result && <ResultCard data={result} />}
    </div>
  );
}
