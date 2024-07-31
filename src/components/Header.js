import LangComponent from "./LangComponent";
import CVBtn from "./CVBtn";
import PageSections from "./PageSections";
import logo from "../assets/img/logo.png";

import "../styles/Header.css";

function Header({ currentSection }) {
  return (
    <header id="header">
      <img 
      className="logo"
      src={logo} 
      alt="logo" />

      <div className="header-right-section">
        <PageSections 
        hideTitle={true} 
        currentSection={currentSection} /> 
        <CVBtn />
        <LangComponent />
      </div>
    </header>
  )
}

export default Header;
