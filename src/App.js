import { useState } from "react";
import { LangProvider } from "./context/langContext";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import MainContainer from "./components/MainContainer";
import './App.css';

function App() {

  const [ showMenu, setShowMenu ] = useState(false);
  const [ currentSection, setCurrentSection ] = useState("");

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleCurrentSection = section => {
    setCurrentSection("");
    setCurrentSection(section);
  }

  return (
    <div className="App">
      <LangProvider>

        <Header 
        currentSection={currentSection} />

        <button 
        className="open-side-menu-btn"
        onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </button>

        <SideMenu 
        showMenu={showMenu} 
        toggleMenu={toggleMenu} />
    
        <MainContainer 
        handleCurrentSection={handleCurrentSection} />

      </LangProvider>
    </div>
  );
}

export default App;
