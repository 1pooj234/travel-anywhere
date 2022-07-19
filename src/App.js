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
      <Routes>
        <Route path="/" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <NavBar>
              <Aeroplane />
              <WelcomePage />
              <AboutPage />
              <WelcomePage />
              <AboutPage />
            </NavBar>
          }
        />
        <Route path="/add" element={<Places />} />
        <Route
          path="*"
          element={
            <NavBar>
              <Aeroplane />
              <WelcomePage />
              <AboutPage />
              <WelcomePage />
              <AboutPage />
            </NavBar>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
