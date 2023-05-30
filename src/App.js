import "./Styles/main.scss";
import { useState, useEffect } from "react";
import common from "./Components/modules/commonFunctions";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  const getPRM = () => {
    return !window.matchMedia("(prefers-reduced-motion: no-preference)")
      .matches;
  };
  const [lightMode, setLightMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(getPRM);

  useEffect(() => {
    const currPRMState = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const PRMListen = (e) => {
      setReduceMotion(!e.matches);
    };
    currPRMState.addEventListener("change", PRMListen);
    return () => {
      currPRMState.removeEventListener("change", PRMListen);
    };
  }, []);

  return (
    <div
      className={`MainApp
          ${reduceMotion ? " reducedMotionNoOS" : ""}
          ${lightMode ? " lightMode" : ""}
        `}>
      <main>
        <Header background={common.doBackgroundGen(lightMode)} />
        <Intro background={common.doBackgroundGen(lightMode)} lightMode={lightMode} reduceMotion={reduceMotion} />
        <Skills background={common.doBackgroundGen(lightMode)} />
        <Contact background={common.doBackgroundGen(lightMode)} />
      </main>
    </div>
  );
}

export default App;
