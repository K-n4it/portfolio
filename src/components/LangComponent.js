import { useContext } from "react";
import LangContext from "../context/langContext";
import "../styles/LangSelector.css";

function LangComponent() {

  const { initialLang, lang, handleLang } = useContext(LangContext);

  return (
    <div id="lang-component">
      <i className="bi bi-globe2"></i>
      <select 
      className="lang-component-selector" 
      onChange={event => handleLang(event)}>
        <option 
        value="en" 
        selected={(initialLang === "en") ? true : false}>
          { lang.lang_en }
        </option>
        <option 
        value="es"
        selected={(initialLang === "es") ? true : false}>
          { lang.lang_es }
        </option>
      </select>
    </div>
  )
}

export default LangComponent;
