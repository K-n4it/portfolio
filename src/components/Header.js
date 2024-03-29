import LangComponent from "./LangComponent";
import CVBtn from "./CVBtn";
import PageSections from "./PageSections";
import logo from "../img/logo.png";
import "../styles/Header.css";

function Header({ currentSection }) {
  return (
    <header id="header">
      <img 
      className="logo"
      src={logo} 
      alt="logo" />

      <div className="header-right-section">
        {/* pasarle un objeto con el nombre de cada sección a PageSections indicando si está siendo interseptado o no */}
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
