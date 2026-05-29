import "./NavBar.css";
import { FaClipboard } from "react-icons/fa";
export default function NavBar() {
  return (
    <div className="navbar">
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
        <FaClipboard size={20} /> ResumeAI
      </h2>
      <span className="nav-badge">
        <h4>Ai Powered</h4>
      </span>
    </div>
  );
}
