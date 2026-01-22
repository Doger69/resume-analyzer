export default function ScoreRing({ score }) {
    return (
      <div className="ring">
        <svg width="140" height="140">
          <circle cx="70" cy="70" r="60" />
          <circle
            cx="70"
            cy="70"
            r="60"
            style={{
              strokeDasharray: 377,
              strokeDashoffset: 377 - (377 * score) / 100,
            }}
          />
        </svg>
        <div className="ring-text">{score.toFixed(1)}%</div>
      </div>
    );
  }
  
