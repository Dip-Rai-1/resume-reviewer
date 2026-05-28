import FeatureCards from "../components/FeatureCards";
import ResumeInput from "../components/ResumeInput";
import RoleSelector from "../components/RoleSelector";
import "./LandingPage.css";
// import { FaTags } from "react-icons/fa";
// import { FaLightbulb } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div>
      <div className="hero">
        <h2>Get your resume reviewed instantly</h2>
        <p>
          Paste your resume and our AI gives your actionable feedback in seconds
        </p>
      </div>
      {/* Feature Cards */}

      <FeatureCards />

      {/* Resume paste area */}
      <ResumeInput />
      <RoleSelector />
    </div>
  );
}
