import { useContext, useState } from "react";
import LangContext from "../context/langContext";
import info from "../data/contactInfo";
import "../styles/Contact.css";

function Contact() {

  const { lang } = useContext(LangContext);

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(info.email);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
  <div id="contact">
    <div className="contact-icons-container">
      <a 
      href={info.linkedin} 
      target="_blank" 
      title="Linkedin">
        <i className="bi bi-linkedin"></i>
      </a>
      <a 
      href={info.github} 
      target="_blank" 
      title="GitHub">
        <i className="bi bi-github"></i>
      </a>
    </div>
    <div className="contact-email-container">
      <i className="bi bi-google"></i>
      <input 
      id="email" 
      type="text" 
      value={info.email} 
      readonly />
      <button 
      className="contact-email-container-button" 
      title={lang.copy_email} 
      onClick={copyEmail}>
        <i className={`bi ${copied ? "bi-check-circle" : "bi-clipboard"}`}></i>
      </button>
    </div>
  </div>
  )
}

export default Contact;
