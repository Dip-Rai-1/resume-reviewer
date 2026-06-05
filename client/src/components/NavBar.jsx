import "./NavBar.css";
import { FaClipboard, FaArrowUpRightFromSquare } from "react-icons/fa6";
export default function NavBar({ results, onReset }) {
  return (
    <div className="navbar">
      <h2 style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
        <FaClipboard size={20} /> ResumeAI
      </h2>
      {!results ? (
        <span className="nav-badge">
          <h4>Ai Powered</h4>
        </span>
      ) : (
        <button
          className="analyse-another-btn"
          onClick={() => {
            onReset();
          }}
        >
          Analyse Another{" "}
          <span>{<FaArrowUpRightFromSquare size={20} />}</span>{" "}
        </button>
      )}
    </div>
  );
}
