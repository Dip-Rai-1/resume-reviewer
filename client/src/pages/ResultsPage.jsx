import MetricCards from "../components/MetricCards";
import ScoreBars from "../components/ScoreBars";
import ScoreHero from "../components/ScoreHero";
import SuggestionsList from "../components/SuggestionsList";
import KeywordPills from "../components/KeywordPills";

const scores = { keywords: 60, impact: 45, structure: 90 };
const suggestions = [
  {
    priority: "high",
    text: "Add numbers to your achievements — e.g. 'reduced load time by 40%'",
  },
  {
    priority: "high",
    text: "Use stronger action verbs — replace 'worked on' with 'built', 'led', 'delivered'",
  },
  {
    priority: "medium",
    text: "Add a 2–3 sentence professional summary at the top of your resume",
  },
  {
    priority: "good",
    text: "Clean structure and formatting — easy to read",
  },
];
const missingKeywords = ["CI/CD", "Agile", "TypeScript", "REST API", "Docker"];
const foundKeywords = ["React", "Node.js", "Python", "Git"];

export default function ResultsPage() {
  return (
    <div>
      <ScoreHero />
      <MetricCards />
      <ScoreBars scores={scores} />
      <hr className="divider" />
      <SuggestionsList suggestions={suggestions} />
      <hr className="divider" />
      <KeywordPills
        missingKeywords={missingKeywords}
        foundKeywords={foundKeywords}
      />
    </div>
  );
}
