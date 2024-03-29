import { useContext } from "react";
import LangContext from "../context/langContext";
import "../styles/ProjectComponent.css";

function ProjectComponent ({ name, page, git_repo, preview, desc, technologies }) {
  
  const { lang } = useContext(LangContext);

  return (
    <div id="project-component">
      <h5>{name}</h5>
      <div className="project-component-links">
        <a 
        href={page} 
        target="_blank" 
        title={lang.Project.to_project}>
          <i class="bi bi-box-arrow-up-right"></i>
        </a>
        <a 
        href={git_repo} 
        target="_blank" 
        title={lang.Project.to_github}>
          <i className="bi bi-github"></i>
        </a>
      </div>
      <div className="project-component-card">
        <div className="project-component-preview">
          <img  
          src={preview} 
          alt="project name" />
          {/* <p>{desc}</p> */}
        </div>

        {
          technologies.map(tech => 
            <img 
            className="icon" 
            src={tech}
            alt="icon" />
          )
        }
        </div>
    </div>
  )
}

export default ProjectComponent;
