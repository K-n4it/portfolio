import { useContext } from "react";
import { InView } from "react-intersection-observer";
import LangContext from "../context/langContext";
import HTML from "../SVGs/html.svg";
import CSS from "../SVGs/css.svg";
import JS from "../SVGs/js.svg";
import REACT_I from "../SVGs/react.svg";
import NODE from "../SVGs/nodejs.svg";
import GIT from "../SVGs/git.svg";
import "../styles/SkillsSection.css";

function SkillsSection({ handleCurrentSection }) {

  const { lang } = useContext(LangContext);

  return (
    <InView 
    as="div" 
    onChange={inView => inView ? handleCurrentSection("skills") : ""}
    rootMargin="-50% 0px -50% 0px">
      <section id="skills-section">
        <h3 className="section-title">{lang.SkillsSection.title}</h3>

        <div className="skills-section-languages skills-section-card">
          <h4>{lang.SkillsSection.langs_card}</h4>
          <ul>
            <li>
              <img 
              className="icon" 
              src={HTML} 
              alt="html_icon" />
              <p>HTML</p>
            </li>
           <li>
              <img 
              className="icon" 
              src={CSS} 
              alt="css_icon" />
              <p>CSS</p>
            </li>
            <li>
              <img 
              className="icon" 
              src={JS} 
              alt="js_icon" />
              <p>JavaScript</p>
            </li>
          </ul>
        </div>

        <div className="skills-section-libraries skills-section-card">
          <h4>{lang.SkillsSection.lib_card}</h4>
          <ul>
            <li>
              <img 
              className="icon" 
              src={REACT_I} 
              alt="react_icon" />
              <p>React JS</p>
            </li>
          </ul>
        </div>

        <div className="skills-section-back-end skills-section-card">
          <h4>Backend</h4>
         <ul>
            <li>
              <img 
              className="icon" 
             src={NODE} 
             alt="nodejs_icon" />
              <p>
                Node JS + Express
                <br />
                <span>{lang.SkillsSection.backend_comment}</span>
              </p>
          </li>
         </ul>
       </div>

        <div className="skills-section-tools skills-section-card">
          <h4>{lang.SkillsSection.tools_card}</h4>
          <ul>
            <li>
              <img 
              className="icon" 
              src={GIT} 
              alt="git_icon" />
              <p>Git</p>
            </li>
          </ul>
        </div>
      </section>
    </InView> 
  )
}

export default SkillsSection;
