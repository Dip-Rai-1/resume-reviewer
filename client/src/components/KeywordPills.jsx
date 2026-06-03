import Keyword from "./Keyword";
import "./KeywordPills.css";

export default function KeywordPills({ missingKeywords, foundKeywords }) {
  return (
    <div className="keywords">
      <h3 className="keywords__title">Keywords</h3>
      <Keyword
        missingKeywords={missingKeywords}
        foundKeywords={foundKeywords}
      />
    </div>
  );
}
