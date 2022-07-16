import "./App.css";
import WelcomePage from "./components/welcome/Welcome";
import AboutPage from "./components/about/About";
import Aeroplane from "./components/aeroplane/Aeroplane";
import NavBar from "./components/navigation/Navigation";
import MenuBtn from "./components/menuButton/Menu";
function App() {
  return (
    <div className="App">
      <NavBar>
        <Aeroplane />
        <WelcomePage />
        <AboutPage />
        <WelcomePage />
        <AboutPage />
      </NavBar>
    </div>
  );
}

export default App;
