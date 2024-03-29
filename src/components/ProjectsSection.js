import { useContext } from "react";
import { InView } from "react-intersection-observer";
import LangContext from "../context/langContext";
import ProjectComponent from "./ProjectComponent";
import projects from "../data/projects";
import "../styles/ProjectsSection.css";

function ProjectsSection ({ handleCurrentSection }) {

  const { lang } = useContext(LangContext);

  return (
    <InView 
    as="div" 
    onChange={inView => inView ? handleCurrentSection("projects") : ""}
    rootMargin="-50% 0px -50% 0px">
      <section id="projects-section">
        <h3 className="section-title">{lang.ProjectsSection}</h3>
        <div className="projects-section-container">
          {
            projects.map(project =>
              <ProjectComponent 
              name={project.name}
              page={project.page} 
              git_repo={project.git_repo}
              preview={project.preview}
              desc={project.en_desc} 
              technologies={project.technologies} />
            )
          }
        </div>
      </section>
    </InView>
  )
}

export default ProjectsSection;
