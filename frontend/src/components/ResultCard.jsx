import ScoreRing from "./ScoreRing";

export default function ResultCard({ data }) {
  return (
    <div className="results-layout">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <ScoreRing score={data.match_percentage} />

        <div className="stats">
          <div>
            <strong>{data.matched_keywords_count}</strong>
            <span>Matched</span>
          </div>
          <div>
            <strong>{data.missing_keywords_count}</strong>
            <span>Missing</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <h3>Missing Skills</h3>
        <div className="pill-group">
          {data.missing_keywords_sample.map((k, i) => (
            <span key={i} className="pill red">
              {k}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
