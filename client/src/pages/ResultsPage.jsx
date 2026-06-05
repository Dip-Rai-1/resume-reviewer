import MetricCards from "../components/MetricCards";
import ScoreBars from "../components/ScoreBars";
import ScoreHero from "../components/ScoreHero";
import SuggestionsList from "../components/SuggestionsList";
import KeywordPills from "../components/KeywordPills";

export default function ResultsPage({ results, jobRole }) {
  console.log(jobRole);
  return (
    <div>
      <ScoreHero
        overallScore={results.overallScore}
        scores={results.scores}
        jobRole={jobRole}
      />
      <MetricCards scores={results.scores} />
      <ScoreBars scores={results.scores} />
      <hr className="divider" />
      <SuggestionsList suggestions={results.suggestions} />
      <hr className="divider" />
      <KeywordPills
        missingKeywords={results.missingKeywords}
        foundKeywords={results.foundKeywords}
      />
    </div>
  );
}
