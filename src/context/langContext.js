import { createContext, useState } from "react";
import langs from "../languages/languages";

const LangContext = createContext();

const navLang = navigator.language;
const initialLang = navLang.startsWith("es") ? "es" : "en";

function LangProvider({ children }) {

  const [lang, setLang] = useState(langs[initialLang]);

  const handleLang = event => {
    console.log(event);
    setLang(langs[event.target.value]);
  }

  const langData = { initialLang, lang, handleLang };

  return <LangContext.Provider value={langData}>{children}</LangContext.Provider>
}

export { LangProvider };
export default LangContext;
