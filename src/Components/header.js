import { useState } from "react";

const Header = () => {

  const [picHold, setPicHold] = useState(false);

  return (
    <>
      <header className="">
        <div className="wrapper">
          <div className="profilePic" onClick={()=>setPicHold(!picHold)}>
            <img
              className="mePicLayer1"
              src="./assets/mePic-Asphodel.jpg"
              alt="It's me, Paul. Hello!" />
            <div className="mePicLayerAnim mePicLayer2"></div>
            <div className={`mePicLayerAnim mePicLayer3${picHold ? ' mePicLayer3Hold' : ''}`}></div>
          </div>
          <div className="">
            <h2>
              Hi there<span className="">!</span>
            </h2>
            <h2>My name is</h2>
            <h1>
              Paul R<span className="">.</span>
            </h1>
          </div>
        </div>
        <h3>And I'm a Toronto-based web developer</h3>
      </header>
    </>
  )
}

export default Header;
