import { useState, useEffect } from "react";

const Header = ({ doPreload }) => {
  const [profilePic, setProfilePic] = useState(true);
  const [profileToggle, setProfileToggle] = useState(false);
  const [animReady, setAnimReady] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const profileAction = () => {
    if (animReady) {
      setProfilePic(!profilePic);
      setAnimReady(false);
      setProfileToggle(!profileToggle);
      setTimeout(()=>setAnimReady(true), 1500);
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
      }, 1500)
      setTimeout(()=>{
        setAnimReady(true)
      }, 3000)
    }
  }, [profileToggle, firstLoad])

  return (
    <header className="introSection">
      <div className="wrapper">
        <div className="headerContainer">
          <div className="centerHeaderItems">
            <div className="backgroundStyle"></div>
            <div
            className={`profilePic${profileToggle ? " activeAnim" : ""} ${profilePic ? "" : " profilePicAlt"}`}
            onClick={profileAction}
            onMouseOver={()=>doPreload("profilePics")}>
              <img
                className="mePicLayer1"
                src={profilePic ? "./assets/mePic-Asphodel-1.jpg" : "./assets/mePic-Asphodel-2.jpg"}
                alt="It's me, Paul. Hello!" />
              <div className="mePicLayerAnim mePicLayer2"></div>
              <div className="mePicLayerAnim mePicLayer3"></div>
            </div>
            <div className="headerText">
              <h2>Hi there!</h2>
              <h2>My name is</h2>
              <h1>Paul R.</h1>
            </div>
          </div>
          <h3>And I'm a web and software developer</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
