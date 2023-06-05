import {useState, useEffect, useRef} from "react";
import DevIcons from "./modules/DevIcons";

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
  const companies = [
    [
      "Deloitte Digital",
      "./assets/companies/deloittedigital.png",
      "./assets/companies/deloittedigital-l.png"
    ],
    [
      "TWG: The Working Group",
      "./assets/companies/twg.png",
      "./assets/companies/twg.png"
    ],
    [
      "Shopify",
      "./assets/companies/shopify.png",
      "./assets/companies/shopify-l.png"
    ],
    [
      "Juno College of Technology",
      "./assets/companies/junocollege.png",
      "./assets/companies/junocollege-l.png"
    ]
  ];
  const styleDummyBox = `perspective(5000px) rotateX(0) rotateY(0)`;
  const dummyBoxArray = [styleDummyBox, styleDummyBox, styleDummyBox, styleDummyBox]

  const [codePenPeek] = useState(peeks[Math.floor(Math.random() * 3) + 1])
  const [mouseCoord, setMouseCoord] = useState({x: 0, y: 0});
  const [companyStyleBox, setCompanyStyleBox] = useState(dummyBoxArray);
  const [companyStyleShine, setCompanyStyleShine] = useState(0);
  const [centerX, setCenterX] = useState(0)
  const [centerY, setCenterY] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [midX, setMidX] = useState(0)
  const [midY, setMidY] = useState(0)
  const [shineOp, setShineOp] = useState(0)
  const [shineReset, setShineReset] = useState(true)

  const logosRef = useRef();

  const mouseCap = (e) => {
    if (!reduceMotion && window.innerWidth > 1024) {
      setMouseCoord({x: e.clientX, y: e.clientY});
      setCenterX(logosRef.current.clientWidth / 2)
      setCenterY(logosRef.current.clientHeight / 2)
      setOffsetX(((mouseCoord.x - centerX) / centerX) * 20)
      setOffsetY(((mouseCoord.y - centerY) / centerY) * 20)
      setMidX(0.9 - (Math.abs(offsetX / 20) ?? 0))
      setMidY(0.9 - (Math.abs(offsetY / 20) ?? 0))
      setShineOp(Math.max((((midX * .55) + (midY * .25)) / 2).toFixed(2), 0))
      setShineReset(false)
    };
  };

  const mouseCapReset = () => {
    setShineReset(true);
    setCompanyStyleBox(dummyBoxArray);
    setCompanyStyleShine(0);
  };

  useEffect(()=>{
    const newDummyBox = ["","","",""]
    setCompanyStyleBox(
      newDummyBox.map((i,k)=>`perspective(500px) rotateX(${(-.7 * offsetY).toFixed(2)}deg) rotateY(${(((mouseCoord.x - (centerX * (.45 + (.35 * k)))) / centerX) * 10).toFixed(2)}deg)`))
    setCompanyStyleShine(isNaN(shineOp) ? 0 : shineOp)
  }, [offsetX, offsetY, centerX, mouseCoord.x, shineOp])

  return (
    <section
      id="skills"
      className="skillsSection sectionBackground"
      style={background}
      onMouseMove={mouseCap}
      onMouseLeave={mouseCapReset}
      ref={logosRef}>
      <div className="wrapper">
        <div className="skillsContainer">
          <div className="skillsDesc">
            <h4>What I bring:</h4>
            <p className="skillsText">
              I'm a web developer and software engineer with +5 years experience developing fully-realized top-down web solutions for clients using Javascript, React, HTML/CSS, Ruby-on-Rails and Wordpress architectures. My goals are always to learn, improve, and employ modern accessibility standards to build a better web for all!
            </p>
          </div>
          <aside className="codePenAside">
            <h5>Check out a codepen!</h5>
            <a href={codePenPeek[2]} target="_blank" rel="noopener noreferrer">
              <div className="codePenBox">
                <img src={codePenPeek[1]} alt={codePenPeek[0]}/>
              </div>
            </a>
          </aside>
        </div>
        <div className="devIconsContainer">
          <h4>My toolkit:</h4>
          <div className="devIconsBox">
            <DevIcons />
          </div>
        </div>
        <div className="companiesContainer">
          <h4>I've worked with:</h4>
          <ul className="companiesList">
            {companies.map((i, k) => {
              const imgURL = lightMode ? i[2] : i[1];
              return (
                <li
                  className={`companyLogoItem
                    ${shineReset ? " shineReset" : ""}`}
                  key={k}
                  style={{transform: companyStyleBox[k]}}>
                  <div
                    className="shine"
                    style={{
                      opacity: companyStyleShine,
                      backgroundPosition: `${parseInt(offsetX - 25) * 5}px ${parseInt(offsetY + 700) * 3.25 * (k + 1)}px`}}></div>
                  <img className="companyLogo"
                    src={imgURL}
                    alt={i[0]} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills;
