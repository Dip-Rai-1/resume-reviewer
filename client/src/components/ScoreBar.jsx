export default function ScoreBar({ label, value, color }) {
  return (
    <div className="score-bar">
      <span className="score-bar__label">{label}</span>
      <div className="score-bar__track">
        <div
          className="score-bar__fill"
          style={{ "--target-width": `${value}%`, background: color }}
        />
      </div>
      <span className="score-bar__value">{value}</span>
    </div>
  );
}
