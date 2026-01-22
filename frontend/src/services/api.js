export async function analyzeResume(file, jobDescription) {
  const formData = new FormData();
  formData.append("resume", file);
  formData.append("job_description", jobDescription);

  const res = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    body: formData,
  });

  return res.json();
}
