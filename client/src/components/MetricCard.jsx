export default function MetricCard({
  metricCardLabel,
  metricCardValue,
  color,
}) {
  return (
    <div className="metric-card">
      <h4>{metricCardLabel}</h4>
      <h2 style={{ color: color }}>{metricCardValue}</h2>
    </div>
  );
}
