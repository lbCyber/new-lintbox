import "./Styles/main.scss";
import { useState, useEffect } from "react";
import { default as Preloader, doPreload } from "./Components/Preloader";
import Nav from "./Components/Nav";
import Header from "./Components/HeaderTop";
import Intro from "./Components/Intro";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import common from "./Components/commonFunctions";

function App() {

  const getPRM = () => {
    return !window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  }
  const [lightMode, setLightMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(getPRM);

  useEffect(()=>{
    const currPRMState = window.matchMedia('(prefers-reduced-motion: no-preference)')
    const PRMListen = (e) => {
      setReduceMotion(!e.matches)
    }
    currPRMState.addEventListener('change', PRMListen)
    return() => {
      currPRMState.removeEventListener('change', PRMListen)
    }
  }, [])

  return (
    <>
      <Preloader />
      <div className={
        `MainApp
          ${reduceMotion ? " reducedMotionNoOS" : ""}
          ${lightMode ? " lightMode" : ""}
        `}>
        <Nav
          setReduceMotion={setReduceMotion}
          reduceMotion={reduceMotion}
          lightMode={lightMode}
          setLightMode={setLightMode}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          />
        <main>
          <Header   doPreload={doPreload}
                    background={common.doBackgroundGen(lightMode)}/>
          {/* <Intro    doPreload={doPreload}/>
          <Work     doPreload={doPreload}/>
          <Skills   doPreload={doPreload}/>
          <Contact  doPreload={doPreload}/> */}
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
