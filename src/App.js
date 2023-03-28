import "./Styles/main.scss";
import { useState } from "react";
import { default as Preloader, doPreload } from "./Components/preloader";
import Nav from "./Components/nav";
import Header from "./Components/header";
import Intro from "./Components/intro";
import Work from "./Components/work";
import Skills from "./Components/skills";
import Contact from "./Components/contact";
import Footer from "./Components/footer";

function App() {

  const [reduceMotion, setReduceMotion] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <>
      <Preloader />
      <div className={`MainApp${reduceMotion ? " reducedMotionNoOS" : ""}${lightMode ? " lightMode" : ""}`}>
        <Nav
          reduceMotion={reduceMotion}
          setReduceMotion={setReduceMotion}
          lightMode={lightMode}
          setLightMode={setLightMode}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          />
        <main>
          <Header  doPreload={doPreload}/>
          <Intro   doPreload={doPreload}/>
          <Work    doPreload={doPreload}/>
          <Skills  doPreload={doPreload}/>
          <Contact doPreload={doPreload}/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
