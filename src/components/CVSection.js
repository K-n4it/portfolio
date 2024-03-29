import { useContext } from "react";
import LangContext from "../context/langContext";
import cvEN from "../img/cv-en.png";
import cvES from "../img/cv-es.png";
import CVBtn from "./CVBtn";
import "../styles/CVSection.css";

function CVSection() {

  const { initialLang } = useContext(LangContext);

  return (
    <section id="cv-section">
      <h3 className="section-title">Curriculum</h3>
      <img 
      src={(initialLang === "es") ? cvES : cvEN} 
      alt="cv-preview" />
      <i className="bi bi-arrow-down"></i>

      <CVBtn />
    </section>
  )
}

export default CVSection;
