import { useContext } from "react";
import { InView } from "react-intersection-observer";

import LangContext from "../context/langContext";
import Contact from "./Contact";
import myPhoto from "../assets/img/my-photo.png";

import "../styles/AboutMeSection.css";

function AboutMeSection({ handleCurrentSection }) {

  const { lang } = useContext(LangContext);

  return (
    <InView 
    as="div" 
    onChange={inView => inView && handleCurrentSection("about-me")}
    rootMargin="-50% 0px -50% 0px">
      <section id="about-me-section">
          <img 
          className="about-me-section-my-photo box-shadow" 
          src={myPhoto}
          alt="Luis Tovar" />

        <div className="about-me-section-info-container">
          <h2 className="text-shadow">Luis Tovar</h2>
          <h3 className="text-shadow">{lang.AboutMeSection.programmer}</h3>
          <ul>
            <li>Front-End</li>
            <li>Mobile</li>
            <li>{lang.lang_es}</li>
            <li>{lang.lang_en}</li>
          </ul>
        </div>

        <div className="phrase-container">
          <p className="text-shadow">{lang.AboutMeSection.phrase}</p>
        </div>

        <Contact />
      </section>
    </InView>
  )
}

export default AboutMeSection;
