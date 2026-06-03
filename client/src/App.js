import NavBar from "./components/NavBar";
import "./App.css"
import LandingPage from "./pages/LandingPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <ResultsPage />
    </div>
  );
}

export default App;
