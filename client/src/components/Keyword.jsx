export default function Keyword({ missingKeywords, foundKeywords }) {
  return (
    <div className="keywords__pills">
      {missingKeywords.map((keyword, index) => (
        <span key={index} className="pill pill--missing">
          {keyword}
        </span>
      ))}
      {foundKeywords.map((keyword, index) => (
        <span key={index} className="pill pill--found">
          {keyword}
        </span>
      ))}
    </div>
  );
}
