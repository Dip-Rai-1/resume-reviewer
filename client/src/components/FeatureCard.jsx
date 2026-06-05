import "./FeatureCard.css";

export default function FeatureCard({ keyword, icon, bgColor, textColor }) {
  return (
    <div
      className="feature-card"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span style={{ color: textColor }}>{icon}</span>
      <h5 style={{ color: textColor }}>{keyword}</h5>
    </div>
  );
}
