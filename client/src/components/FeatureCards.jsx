import FeatureCard from "./FeatureCard";
import { FaChartBar, FaTags, FaLightbulb } from "react-icons/fa";

export default function FeatureCards() {
  return (
    <div className="feature-cards">
      <FeatureCard
        keyword={"Score your resume"}
        icon={<FaChartBar size={20} color="#534AB7" />}
        color={"#534AB7"}
      />
      <FeatureCard
        keyword={"Finding missing keywords"}
        icon={<FaTags size={20} color="#0F6E56" />}
        color={"#0F6E56"}
      />
      <FeatureCard
        keyword={"Get Suggestions"}
        icon={<FaLightbulb size={20} color="#993C1D" />}
        color={"#993C1D"}
      />
    </div>
  );
}
