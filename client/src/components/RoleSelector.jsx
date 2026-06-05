import "./RoleSelector.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState } from "react";
import { analyseResume } from "../api/api";

export default function RoleSelector({
  resumeTxt,
  onSubmit,
  onError,
  onSetRole,
  onSetLoadingState,
}) {
  const roles = [
    "Sofware Engineer",
    "Frontend Engineer",
    "Backend Developer",
    "Full Stack Developer",
  ];
  const [jobRole, setRole] = useState(roles[0]);
  async function handleAnalyseBtn() {
    if (!resumeTxt) {
      onError("Please paste your resume first");
      return;
    }
    if (resumeTxt.trim().length < 50) {
      onError("Resume is too short - Please paste your full resume");
      return;
    }

    try {
      onError("");
      onSetLoadingState(true);
      const responseData = await analyseResume(resumeTxt, jobRole);
      onSubmit(responseData);
      onSetLoadingState(false);
    } catch (err) {
      console.log(err);
      onError("Something went wrong - please try again");
    }
  }

  return (
    <div className="form-actions">
      <select
        className="role-select"
        onChange={(e) => {
          setRole(e.target.value);
          onSetRole(e.target.value);
        }}
        defaultValue={roles[0]}
      >
        {roles.map((role, index) => (
          <option value={role} key={index}>
            {role}
          </option>
        ))}
      </select>
      <button
        className="analyse-btn"
        onClick={async () => {
          await handleAnalyseBtn(resumeTxt, jobRole);
        }}
      >
        Analyse <span>{<FaArrowUpRightFromSquare size={20} />}</span>{" "}
      </button>
    </div>
  );
}
