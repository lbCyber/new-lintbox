import { useState, useRef, useEffect } from "react";

const Companies = ({ lightMode, reduceMotion }) => {
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

  const [mouseCoord, setMouseCoord] = useState({x: 0, y: 0});
  const [companyStyleBox, setCompanyStyleBox] = useState(dummyBoxArray);
  const [companyStyleShine, setCompanyStyleShine] = useState(0);
  const [middleX, setMiddleX] = useState(0)
  const [middleY, setMiddleY] = useState(0)
  const [offsetX, setoffsetX] = useState(0)
  const [offsetY, setoffsetY] = useState(0)
  const [xmid, setxmid] = useState(0)
  const [ymid, setymid] = useState(0)
  const [shineOp, setshineOp] = useState(0)
  const [shineReset, setShineReset] = useState(true)
  const [cardTextVisible, setCardTextVisible] = useState([false,false,false,false])

  const logosRef = useRef();

  const mouseCap = (e) => {
    if (!reduceMotion && window.innerWidth > 1024) {
      setMouseCoord({x: e.clientX, y: e.clientY});
      setMiddleX(logosRef.current.clientWidth / 2)
      setMiddleY(logosRef.current.clientHeight / 2)
      setoffsetX(((mouseCoord.x - middleX) / middleX) * 20)
      setoffsetY(((mouseCoord.y - middleY) / middleY) * 20)
      setxmid(0.9 - Math.abs(offsetX / 20))
      setymid(0.9 - Math.abs(offsetY / 20))
      setshineOp(Math.max((((xmid * .55) + (ymid * .25)) / 2).toFixed(2), 0))
      setShineReset(false)
    };
  };

  const mouseCapReset = () => {
    setShineReset(true);
    setCompanyStyleBox(dummyBoxArray);
    setCompanyStyleShine(0);
  };

  const cardTextSlide = (i,d) => {
    if (window.innerWidth > 1024) {
      const array = cardTextVisible
      array[i] = d
      setCardTextVisible(array)
    }
  }

  useEffect(()=>{
    setCompanyStyleBox([
      `perspective(500px) rotateX(${(-.7 * offsetY).toFixed(2)}deg) rotateY(${(((mouseCoord.x - (middleX * .45)) / middleX) * 10).toFixed(2)}deg)`,
      `perspective(500px) rotateX(${(-.7 * offsetY).toFixed(2)}deg) rotateY(${(((mouseCoord.x - (middleX * .8)) / middleX) * 10).toFixed(2)}deg)`,
      `perspective(500px) rotateX(${(-.7 * offsetY).toFixed(2)}deg) rotateY(${(((mouseCoord.x - (middleX * 1.1)) / middleX) * 10).toFixed(2)}deg)`,
      `perspective(500px) rotateX(${(-.7 * offsetY).toFixed(2)}deg) rotateY(${(((mouseCoord.x - (middleX * 1.45)) / middleX) * 10).toFixed(2)}deg)`
    ])
    setCompanyStyleShine(shineOp)
  }, [offsetX, offsetY, middleX, mouseCoord.x, shineOp])

  return (
    <div
      className="activeAreaCompanies"
      onMouseMove={mouseCap}
      onMouseLeave={mouseCapReset}
      ref={logosRef}>
      <div className="wrapper">
        <p>I've worked for:</p>
        <ul className="companiesList">
          {companies.map((i, k) => {
            const imgURL = lightMode ? i[2] : i[1];
            return (
              <li
                className={`companyLogoItem
                  ${shineReset ? " shineReset" : ""}
                  ${cardTextVisible[k] ? " cardSlideDown" : ""}`}
                key={k}
                style={{transform: companyStyleBox[k]}}
                onMouseEnter={()=>cardTextSlide(k,true)}
                onMouseLeave={()=>cardTextSlide(k,false)}>
                <div
                  className="shine"
                  style={{
                    opacity: companyStyleShine,
                    backgroundPosition: `${parseInt(offsetX - 25) * 5}px ${parseInt(offsetY - 50) * 3.25 * (k + 1)}px`}}></div>
                <img className="companyLogo"
                  src={imgURL}
                  alt={i[0]} />
                <p className="companyCardText">{i[0]}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Companies;
