import TrustBadge from "./TrustBadge";
import "./TrustBadges.css";
import { FaLock, FaBolt, FaSync } from "react-icons/fa";

export default function TrustBadges() {
  return (
    <div className="trust-badges">
      <TrustBadge icon={<FaLock size={20} />} text={"Private & secure"} />
      <TrustBadge icon={<FaBolt size={20} />} text={"Results in seconds"} />
      <TrustBadge icon={<FaSync size={20} />} text={"Try as many times"} />
    </div>
  );
}
