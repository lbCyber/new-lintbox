import {useState, useEffect, useRef, useMemo} from "react";
import Codepen from "./modules/Codepen";
import {useIsVisible} from "./modules/commonFunctions";

const Skills = ({background, lightMode, reduceMotion}) => {

  // const companies = [
  //   [
  //     "Deloitte Digital",
  //     "./assets/companies/deloittedigital.png",
  //     "./assets/companies/deloittedigital-l.png"
  //   ],
  //   [
  //     "TWG: The Working Group",
  //     "./assets/companies/twg.png",
  //     "./assets/companies/twg.png"
  //   ],
  //   [
  //     "Shopify",
  //     "./assets/companies/shopify.png",
  //     "./assets/companies/shopify-l.png"
  //   ],
  //   [
  //     "Juno College of Technology",
  //     "./assets/companies/junocollege.png",
  //     "./assets/companies/junocollege-l.png"
  //   ]
  // ];
  // const styleDummyBox = `perspective(5000px) rotateX(0) rotateY(0)`;

  // const dummyBoxArray = useMemo(()=>[styleDummyBox, styleDummyBox, styleDummyBox, styleDummyBox], [styleDummyBox])

  // const [mouseCoord, setMouseCoord] = useState({x: 0, y: 0});
  // const [companyStyleBox, setCompanyStyleBox] = useState(dummyBoxArray);
  // const [companyStyleShine, setCompanyStyleShine] = useState(0);
  // const [centerX, setCenterX] = useState(0)
  // const [centerY, setCenterY] = useState(0)
  // const [offsetX, setOffsetX] = useState(0)
  // const [offsetY, setOffsetY] = useState(0)
  // const [midX, setMidX] = useState(0)
  // const [midY, setMidY] = useState(0)
  // const [shineOp, setShineOp] = useState(0)
  // const [shineReset, setShineReset] = useState(true)

  // const logosRef = useRef();
  // const isVisible = useIsVisible(logosRef);

  // useEffect(() => {
  //   const doMouseReset = () => {
  //     setShineReset(true);
  //     setCompanyStyleBox(dummyBoxArray);
  //     setCompanyStyleShine(0);
  //   };
  //   const mouseCap = (e) => {
  //     if (!isVisible || reduceMotion) {
  //       doMouseReset();
  //     } else {
  //       if (window.innerWidth > 1024) {
  //         setMouseCoord({x: e.clientX, y: e.clientY});
  //         setCenterX(logosRef.current.clientWidth / 2);
  //         setCenterY(window.innerHeight / 2);
  //         setOffsetX(((mouseCoord.x - centerX) / centerX) * 20);
  //         setOffsetY(((mouseCoord.y - centerY) / centerY) * 20);
  //         setMidX(0.9 - (Math.abs(offsetX / 20) ?? 0));
  //         setMidY(0.9 - (Math.abs(offsetY / 20) ?? 0));
  //         setShineOp(Math.max(((midX * .65) + (midY * .2)).toFixed(2), 0));
  //         setShineReset(false);
  //         setCompanyStyleShine(isNaN(shineOp) ? 0 : shineOp);

  //         const newDummyBox = ["","","",""];
  //         const rotateX = (-.7 * offsetY).toFixed(2);
  //         const rotateY = i => (((mouseCoord.x - (centerX * (.45 + (.35 * i)))) / centerX) * 10).toFixed(2);

  //         setCompanyStyleBox(
  //         newDummyBox.map((i,k)=>`perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY(k)}deg)`));
  //       } else {
  //         doMouseReset();
  //       }
  //     };
  //   };
  //   window.addEventListener('mousemove', mouseCap);
  //   return () => {
  //     window.removeEventListener('mousemove', mouseCap);
  //   }
  // }, [centerX, centerY, isVisible, mouseCoord, reduceMotion, midX, midY, offsetX, offsetY, shineOp, dummyBoxArray])

  // const mapBackgroundPosition = i => {
  //   const backgroundX = (300 + parseInt(mouseCoord.x * (.35 + (i * -.015)))) % 1000;
  //   const backgroundY = (100 + parseInt(mouseCoord.y * .2 * (1 + i))) % 1000;
  //   return `${backgroundX}px ${backgroundY}px`;
  // }

  return (
    <section
      id="Skills"
      className="skillsSection"
      style={background}>
      <div className="links">
        <div className="learnMore">
          <h5 className="resumeHeadingTop">Find me at LinkedIn <a href="https://www.linkedin.com/in/procc/" rel="noopener noreferrer">here</a>!</h5>
          <h5 className="resumeHeadingBottom">Or see my resume <a href="https://lintbox.com/procca-resume-general.pdf" target="_blank" rel="noopener noreferrer">here</a>!</h5>
          <div className="oldPage">
            <p>(This is a temporary site as I work on a redesign.</p>
            <p>Check back soon for more!)</p>
            <p>You can also check out the old site <a href="https://lintbox.com/oldindex.html">here</a>!</p>
          </div>
        </div>
        <Codepen />
      </div>
      {/* <div className="skillsContainer">
        <div className="skillsDesc">
          <div className="companiesContainer">
            <h4>I've worked with:</h4>
            <ul
              className="companiesList"
              ref={logosRef}>
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
                        backgroundPosition: mapBackgroundPosition(k)
                      }}></div>
                    <img className="companyLogo"
                      src={imgURL}
                      alt={i[0]} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
