import { useState } from "react";
import FeatureCards from "../components/FeatureCards";
import Hero from "../components/Hero";
import ResumeInput from "../components/ResumeInput";
import RoleSelector from "../components/RoleSelector";
import TrustBadges from "../components/TrustBadges";
import "./LandingPage.css";

export default function LandingPage({ onSubmit, onSetRole }) {
  const [resumeTxt, setResumeTxt] = useState("");
  const [error, setError] = useState("");
  return (
    <div>
      {/* Hero */}
      <Hero />
      {/* Feature Cards */}

      <FeatureCards />

      {/* Resume paste area */}
      <ResumeInput onChange={setResumeTxt} error={error} />

      {/* Dropdown for user to select the job role */}
      <RoleSelector
        resumeTxt={resumeTxt}
        onSubmit={onSubmit}
        onError={setError}
        onSetRole={onSetRole}
      />

      <hr className="divider" />

      {/*Trust Badges  */}
      <TrustBadges />
    </div>
  );
}
