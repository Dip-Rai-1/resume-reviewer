import FeatureCards from "../components/FeatureCards";
import Hero from "../components/Hero";
import ResumeInput from "../components/ResumeInput";
import TrustBadges from "../components/TrustBadges";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <Hero />
      {/* Feature Cards */}

      <FeatureCards />

      {/* Resume paste area */}
      <ResumeInput />

      <hr className="divider" />

      {/*Trust Badges  */}
      <TrustBadges />
    </div>
  );
}
