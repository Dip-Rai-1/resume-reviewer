import NavBar from "./components/NavBar";
import "./App.css"
import LandingPage from "./pages/LandingPage";
import ResultsPage from "./pages/ResultsPage";
import { useState } from "react";
import Loader from "./components/Loader";

function App() {
  const roles = [
    "Sofware Engineer",
    "Frontend Engineer",
    "Backend Developer",
    "Full Stack Developer",
  ];
  const [results, setResults] = useState(null);
  const [role, setRole] = useState([roles[0]]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <NavBar results={results} onReset={setResults} />

      {isLoading && (
        <Loader />
      )}

      {results
        ? <ResultsPage results={results} jobRole={role} />
        : <LandingPage onSubmit={setResults} onSetRole={setRole} onSetLoadingState={setIsLoading} />
      }
    </div >
  );
}

export default App;
