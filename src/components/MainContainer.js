import AboutMeSection from "./AboutMeSection";
import SkillsSection from "./SkillsSection";
import CVSection from "./CVSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "./Footer";

function MainContainer({ handleCurrentSection }) {
  return (
    <main id="main-container">
      <AboutMeSection 
      handleCurrentSection={handleCurrentSection} />

      <SkillsSection 
      handleCurrentSection={handleCurrentSection} />

      <CVSection />

      <ProjectsSection 
      handleCurrentSection={handleCurrentSection} />

      <Footer />
    </main>
  )
}

export default MainContainer;
