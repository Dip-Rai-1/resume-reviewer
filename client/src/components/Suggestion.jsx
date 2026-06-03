export default function Suggestion({ priority, text }) {
  return (
    <div className="suggestion-row">
      <span
        className={`priority ${priority === "high" ? "priority-high" : priority === "medium" ? "priority-med" : "priority-low"}`}
      >
        {priority}
      </span>
      <p className="suggestion-text">{text}</p>
    </div>
  );
}
