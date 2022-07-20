import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/welcome/Welcome";
import AboutPage from "./components/about/About";
import Aeroplane from "./components/aeroplane/Aeroplane";
import NavBar from "./components/navigation/Navigation";
import Places from "./components/places/Places";
function App() {
  return (
    <div className="App">
      <NavBar>
        <Aeroplane />
        <WelcomePage />
        <AboutPage />
        <WelcomePage />
        <AboutPage />
        <Places />
      </NavBar>
    </div>
  );
}

export default App;
