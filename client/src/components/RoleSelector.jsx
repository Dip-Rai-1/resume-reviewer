import "./RoleSelector.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function RoleSelector() {
  return (
    <div className="form-actions">
      <select className="role-select">
        <option value="software-engineer">Software Engineer</option>
        <option value="frontend-developer">Frontend Developer</option>
        <option value="backend-developer">Backend Developer</option>
        <option value="fullstack-developerengineer">
          Full Stack Developer
        </option>
      </select>
      <button className="analyse-btn">
        Analyse <span>{<FaArrowUpRightFromSquare size={20} />}</span>{" "}
      </button>
    </div>
  );
}
