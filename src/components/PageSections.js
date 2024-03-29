import { useContext } from "react";
import LangContext from "../context/langContext";
import "../styles/PageSections.css";

function PageSections({ hideTitle, toggleMenu, currentSection }) {

  const { lang } = useContext(LangContext);

  return (
    <div id="page-sections">
      <h5 className={hideTitle ? "hidden-element" : ""}>
        {lang.PageSections.title}
      </h5>
      <a 
      className={(currentSection === "about-me") ? "highlight" : ""} 
      href="#about-me-section" 
      onClick={toggleMenu}>
        {lang.PageSections.about_me}
      </a>
      <a 
      className={(currentSection === "skills") ? "highlight" : ""} 
      href="#skills-section" 
      onClick={toggleMenu}>
        {lang.PageSections.skills}
      </a>
      <a 
      className="cv" 
      href="#cv-section" 
      onClick={toggleMenu}>Curriculum</a>
      <a 
      className={(currentSection === "projects") ? "highlight" : ""} 
      href="#projects-section" 
      onClick={toggleMenu}>
        {lang.PageSections.Projects}
      </a>
    </div>
  )
}

export default PageSections;
