import { useContext } from "react";

import LangContext from "../context/langContext";
import cvEN from "../files/cv-en.pdf";
import cvES from "../files/cv-es.pdf";

import "../styles/CVBtn.css";

function CVBtn() {

  const { initialLang, lang } = useContext(LangContext);

  return (
    <div id="cv-btn">
      <button 
      onClick={() => (initialLang === "es") ? 
        window.open(cvES, "_blank") : 
        window.open(cvEN, "_blank")
      } 
      className="cv-open-btn" 
      type="button">
        { lang.CVBtn }
        <i class="bi bi-box-arrow-up-right"></i>
      </button>
    </div>
  )
}

export default CVBtn;
