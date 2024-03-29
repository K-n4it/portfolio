import { useContext } from "react";
import LangContext from "../context/langContext";
import Contact from "./Contact";
import PageSections from "./PageSections";
import "../styles/Footer.css";

function Footer() {

  const { lang } = useContext(LangContext);

  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();

    return year;
  }

  return (
    <footer id="footer">
      <h4>{`${lang.Footer.title} - ${getYear()}`}</h4>

      <Contact />
      <PageSections 
      hideTitle={false} />

      <p className="footer-info">
        {lang.Footer.info}
      </p>
    </footer>
  )
}

export default Footer;
