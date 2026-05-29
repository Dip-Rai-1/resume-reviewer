import "./TrustBadge.css";

export default function TrustBadge({ text, icon }) {
  return (
    <div className="trust-badge">
      <span>{icon}</span>
      <p>{text}</p>
    </div>
  );
}
