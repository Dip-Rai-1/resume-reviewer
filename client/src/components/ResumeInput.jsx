import { FaClipboard } from "react-icons/fa";
import "./ResumeInput.css";

export default function ResumeInput() {
  return (
    <div style={{ padding: "2rem" }} className="upload-zone">
      <div className="upload-zone__header">
        <FaClipboard size={28} color="#6b7280" />
        <h3>Paste your resume here</h3>
        <p>Copy and paste the full text of your resume</p>
      </div>

      <textarea
        className="resume-input"
        placeholder={
          "John Smith\nSoftware Engineer|React,Node.js, Python\n\n Experience..."
        }
        rows={6}
      />
    </div>
  );
}
