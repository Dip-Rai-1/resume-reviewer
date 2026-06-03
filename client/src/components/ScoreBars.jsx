import ScoreBar from "./ScoreBar";
import "./ScoreBars.css";

export default function ScoreBars({ scores }) {
  return (
    <div className="score-bars">
      <ScoreBar label="Keywords" value={scores.keywords} color="#BA7517" />
      <ScoreBar label="Impact" value={scores.impact} color="#E24B4A" />
      <ScoreBar label="Structure" value={scores.structure} color="#1D9E75" />
    </div>
  );
}
