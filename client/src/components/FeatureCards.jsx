import FeatureCard from "./FeatureCard";
import { FaChartBar, FaTags, FaLightbulb } from "react-icons/fa";

export default function FeatureCards() {
  return (
    <div className="feature-cards">
      <FeatureCard
        keyword={"Score your resume"}
        icon={<FaChartBar size={20} style={{ color: "#534AB7" }} />}
        bgColor="#EEEDFE"
        textColor="#534AB7"
      />
      <FeatureCard
        keyword={"Finding missing keywords"}
        icon={<FaTags size={20} color="#0F6E56" />}
        bgColor="#E1F5EE"
        textColor="#0F6E56"
      />
      <FeatureCard
        keyword={"Get Suggestions"}
        icon={<FaLightbulb size={20} color="#993C1D" />}
        bgColor="#EEEDFE"
        textColor="#993C1D"
      />
    </div>
  );
}
