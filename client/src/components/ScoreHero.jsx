import "./ScoreHero.css";

export default function ScoreHero() {
  return (
    <div className="score-hero">
      <div className="score-hero__info">
        <h3>Resume analysis complete</h3>
        <p>Software Engineer Role. Just now</p>
      </div>
      <div className="score-hero__score">
        <h1>74</h1>
        <span>out of 100</span>
      </div>
    </div>
  );
}
