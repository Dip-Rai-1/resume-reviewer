import "./FeatureCard.css";

export default function FeatureCard({ keyword, icon, color }) {
  return (
    <div className="feature-card" style={{ color: color }}>
      <span>{icon}</span>
      <h5>{keyword}</h5>
    </div>
  );
}
