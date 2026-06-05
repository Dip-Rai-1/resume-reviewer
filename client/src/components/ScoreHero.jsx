import "./ScoreHero.css";

export default function ScoreHero({ overallScore, scores, jobRole }) {
  return (
    <div className="score-hero">
      <div className="score-hero__info">
        <h3>Resume analysis complete</h3>
        <p>{jobRole}</p>
      </div>
      <div className="score-hero__score">
        <h1>{overallScore}</h1>
        <span>out of 100</span>
      </div>
    </div>
  );
}
