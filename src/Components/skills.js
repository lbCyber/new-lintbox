import {useState} from "react";
import DevIcons from "./modules/DevIcons";
import Companies from "./modules/Companies";

const Skills = ({background, lightMode, reduceMotion}) => {

  const peeks = [
    [
      "blank",
      "./assets/codepen/cp-hr.jpg",
      "https://paulroc.ca"
    ],
    [
      "An elaborate and layered animation I made, with over 100 unique frames but compact at 250kb",
      "./assets/codepen/cp-hr.jpg",
      "https://codepen.io/lbcyber/pen/BaLzpJY"
    ],
    [
      "An animated vector graphic image of an axolotl I made as my business' logo",
      "./assets/codepen/cp-axo.jpg",
      "https://codepen.io/lbcyber/pen/gOwaZzp"
    ],
    [
      "The original Playstation startup screen I recreated in CodePen, complete with old CRT scanline effects!",
      "./assets/codepen/cp-ps.jpg",
      "https://codepen.io/lbcyber/full/ExbmJmp"
    ],
  ]

  const randPeek = Math.floor(Math.random() * 3) + 1
  const [getPeek, setPeek] = useState(peeks[randPeek])

  return (
    <section id="skills" className="skillsSection sectionBackground" style={background}>
      <div className="wrapper">
        <div className="skillsContainer">
          <div className="skillsDesc">
            <p>
              I'm a web developer and software engineer with +5 years experience developing fully-realized top-down web solutions for clients using Javascript, React, HTML/CSS, Ruby-on-Rails and Wordpress architectures. My goals are always to learn, improve, and employ modern accessibility standards to build a better web for all!
            </p>
            <div className="companiesContainer">
              <Companies lightMode={lightMode} reduceMotion={reduceMotion}/>
            </div>
            <div className="devIconsContainer">
              <DevIcons />
            </div>
          </div>
          <aside className="codePenAside">
            <p>Check out a codepen!</p>
            <a href={getPeek[2]} target="_blank" rel="noopener noreferrer">
              <div className="codePenBox">
                <img src={getPeek[1]} alt={getPeek[0]}/>
              </div>
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Skills;
