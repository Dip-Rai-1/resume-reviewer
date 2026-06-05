import { HashLoader } from "react-spinners";

export default function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: "999",
      }}
    >
      <HashLoader color="#534AB7" size={60} />
    </div>
  );
}
