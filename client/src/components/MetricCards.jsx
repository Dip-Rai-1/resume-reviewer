import MetricCard from "./MetricCard";
import "./MetricCards.css";

export default function MetricCards({ scores }) {
  return (
    <div className="metric-cards">
      <MetricCard
        metricCardLabel={"Keywords"}
        metricCardValue={scores.keywords}
        color={"#BA7517"}
      />
      <MetricCard
        metricCardLabel={"Impact"}
        metricCardValue={scores.impact}
        color={"#E24B4A"}
      />
      <MetricCard
        metricCardLabel={"Structure"}
        metricCardValue={scores.structure}
        color={"#1D9E75"}
      />
    </div>
  );
}
