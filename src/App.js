import "./Styles/main.scss";
import { useState, useEffect } from "react";
import Header from "./Components/HeaderTop";
import Footer from "./Components/Footer";

function App() {

  const getPRM = () => {
    return !window.matchMedia("(prefers-reduced-motion: no-preference)")
      .matches;
  };
  const [lightMode, setLightMode] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(getPRM);

  const lightModeToggle = () =>{
    setLightMode(!lightMode)
  }
  const reduceMotionToggle = () =>{
    setReduceMotion(!reduceMotion)
  }

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
          ${lightMode ? " lightMode" : ""}`}>
      <main>
        <Header
          reduceMotionToggle={reduceMotionToggle}
          lightModeToggle={lightModeToggle}
          reduceMotion={reduceMotion} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
