import { useState, useEffect } from "react";

const Header = () => {
  const [profilePic, setProfilePic] = useState(true);
  const [profileToggle, setProfileToggle] = useState(false);
  const [animReady, setAnimReady] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  const profileAction = () => {
    if (animReady) {
      setProfilePic(!profilePic);
      setAnimReady(false);
      setProfileToggle(!profileToggle);
      setTimeout(()=>setAnimReady(true), 3000);
    }
  };

  useEffect(() => {
    if (!profileToggle && !firstLoad) {
      setProfileToggle(!profileToggle)
    }
    if (firstLoad) {
      setTimeout(()=>{
        setFirstLoad(false)
        setProfileToggle(true)
      }, 1000)
    }
  }, [profileToggle, firstLoad])

  return (
    <>
      <header className="">
        <div className="wrapper">
          <div
            className={`profilePic${profileToggle ? " activeAnim" : ""} ${profilePic ? "" : " profilePicAlt"}`}
            onClick={profileAction}>
            <img
              className="mePicLayer1"
              src={profilePic ? "./assets/mePic-Asphodel-1.jpg" : "./assets/mePic-Asphodel-2.jpg"}
              alt="It's me, Paul. Hello!" />
            <div className="mePicLayerAnim mePicLayer2"></div>
            <div className="mePicLayerAnim mePicLayer3"></div>
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
  );
};

export default Header;
