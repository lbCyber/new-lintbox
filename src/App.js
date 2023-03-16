import "./Styles/main.scss";
import Preloader from "./Components/preloader";
import Nav from "./Components/nav";
import Header from "./Components/header";
import Intro from "./Components/intro";
import Work from "./Components/work";
import Skills from "./Components/skills";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import { useState } from "react";

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
          {currentPage === 0 ? <Header /> : null}
          {currentPage === 0 ? <Intro /> : null}
          {currentPage === 1 ? <Work /> : null}
          {currentPage === 2 ? <Skills /> : null}
          {currentPage === 3 ? <Contact /> : null}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
