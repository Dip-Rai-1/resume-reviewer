import Suggestion from "./Suggestion";
import "./SuggestionsList.css";

export default function SuggestionsList({ suggestions }) {
  return (
    <div className="suggestions-list">
      <h3>Suggestions</h3>
      {suggestions.map((suggestion, index) => (
        <Suggestion
          key={index}
          priority={suggestion.priority}
          text={suggestion.text}
        />
      ))}
    </div>
  );
}
