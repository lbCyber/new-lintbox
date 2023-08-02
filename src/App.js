import "./Styles/main.scss";
import { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import About from "./Components/About";
import Contact from "./Components/Contact";
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
      <Nav />
      <Header />
      <main>
        <Skills />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
