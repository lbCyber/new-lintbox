import "./Styles/main.scss";
import preloader from "./Components/preloader";
import Nav from "./Components/nav";
import Header from "./Components/header";
import Intro from "./Components/intro";
import Work from "./Components/work";
import Skills from "./Components/skills";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import { useState, useEffect } from "react";

function App() {

  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    preloader();
  }, [])

  return (
    <>
      <div className={`MainApp${reduceMotion ? " reducedMotionNoOS" : ""}`}>
        <Nav
          reduceMotion={reduceMotion}
          setReduceMotion={setReduceMotion}
          />
        <main>
          <Header />
          <Intro />
          <Work />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
