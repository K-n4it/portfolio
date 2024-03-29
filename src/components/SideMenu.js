import LangComponent from "./LangComponent";
import PageSections from "./PageSections";
import "../styles/SideMenu.css";

function SideMenu({ showMenu, toggleMenu }) {
  return (
    <div 
    id="side-menu"
    style={showMenu ? {left: "0"} : {left: "-100%"}}>
      <button 
      className="close-side-menu-btn"
      onClick={toggleMenu}>
        <i className="bi bi-x"></i>
      </button>

      <LangComponent />

      <PageSections 
      hideTitle={false}
      toggleMenu={toggleMenu} />
    </div>
  )
}

export default SideMenu;
