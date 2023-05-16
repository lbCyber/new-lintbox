import {useState} from "react";
import DevIcons from "./DevIcons";

const Skills = ({background}) => {

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
        <div>
          <blockquote>
            <p>Paul's technical expertise shines through their work - they onboarded in just a few weeks and immediately began contributing to the overall team output. They were autonomous in all they did, and both challenged and improved our processes. This directly contributed to the team hitting 99% of their goal in the 1st half of 2022.</p>
            <p>Simply put, Paul leaves things better than they found them. They are both great and passionate at their craft - Paul is reliable and helped us ship some of our most challenging experiments and features. They also helped onboard full-time developers onto the crew, which accelerated the time to impact for our newer team members.</p>
            <p>Paul was a beacon of light, radiating energy and positivity in everything they did for our crew, and always with a smile. Any team would be lucky to have them!</p>
            <p className="quoteAttr">Carlos Lazo, Staff Software Engineer at Shopify</p>
          </blockquote>
        </div>
        <div className="devIconsContainer">
          <DevIcons />
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
    </section>
  )
}

export default Skills;
