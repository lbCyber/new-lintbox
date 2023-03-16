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
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <>
      <Preloader />
      <div className={`MainApp${reduceMotion ? " reducedMotionNoOS" : ""}`}>
        <Nav
          reduceMotion={reduceMotion}
          setReduceMotion={setReduceMotion}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          />
        <main>
          {currentPage === 0 ? <Header doPreload={doPreload}/> : null}
          {currentPage === 0 ? <Intro doPreload={doPreload}/> : null}
          {currentPage === 1 ? <Work doPreload={doPreload}/> : null}
          {currentPage === 2 ? <Skills doPreload={doPreload}/> : null}
          {currentPage === 3 ? <Contact doPreload={doPreload}/> : null}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
