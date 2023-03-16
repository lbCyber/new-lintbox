import "./Styles/main.scss";
import Preloader from "./Components/preloader";
import Nav from "./Components/nav";
import Header from "./Components/header";
import Intro from "./Components/intro";
import Work from "./Components/work";
import Skills from "./Components/skills";
import Contact from "./Components/contact";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="MainApp">
      <Preloader />
      <Nav />
      <main>
        <Header />
        <Intro />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
