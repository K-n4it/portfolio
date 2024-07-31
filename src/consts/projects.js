import HTML from "../assets/SVGs/html.svg";
import CSS from "../assets/SVGs/css.svg";
import JS from "../assets/SVGs/js.svg";
import REACT_I from "../assets/SVGs/react.svg";
import GIT from "../assets/SVGs/git.svg";

import pokedex from "../assets/img/pokedex1.jpeg";
import photogate from "../assets/img/photogate.jpeg";

const projects = [
  {
    name: "Pokedex",
    page: "https://k-n4it.github.io/pokedex-project.github.io/",
    git_repo: "https://github.com/K-n4it/pokedex-project.github.io",
    preview: pokedex,
    en_desc: "the description goes here",
    es_desc: "la descripción va aquí",
    technologies: [HTML, CSS, JS]
  },
  {
    name: "PhotoGate",
    page: "https://k-n4it.github.io/photogate/",
    git_repo: "https://github.com/K-n4it/photogate",
    preview: photogate,
    en_desc: "the description goes here",
    es_desc: "la descripción va aquí",
    technologies: [REACT_I, GIT]
  }
];

export default projects;
