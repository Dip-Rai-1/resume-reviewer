import MetricCard from "./MetricCard";
import "./MetricCards.css";

export default function MetricCards() {
  return (
    <div className="metric-cards">
      <MetricCard
        metricCardLabel={"Keywords"}
        metricCardValue={"60"}
        color={"#BA7517"}
      />
      <MetricCard
        metricCardLabel={"Impact"}
        metricCardValue={"45"}
        color={"#E24B4A"}
      />
      <MetricCard
        metricCardLabel={"Structure"}
        metricCardValue={"90"}
        color={"#1D9E75"}
      />
    </div>
  );
}
