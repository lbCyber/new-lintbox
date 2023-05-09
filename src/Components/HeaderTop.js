import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPaintbrush } from '@fortawesome/free-solid-svg-icons'

const Header = ({ doPreload, background }) => {
  const [profilePic, setProfilePic] = useState(true);
  const [profileToggle, setProfileToggle] = useState(false);
  const [animReady, setAnimReady] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [clickedActive, setClickedActive] = useState(false);

  const profileAction = () => {
    if (animReady) {
      setProfilePic(!profilePic);
      setAnimReady(false);
      setProfileToggle(!profileToggle);
      setClickedActive(true);
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
    <header className="introSection" style={background}>
      <div className="wrapper">
        <div className="headerContainer">
          <div className="centerHeaderItems">
            <div className="backgroundStyle"></div>
            <div
            className={`profilePic${profileToggle ? " activeAnim" : ""} ${profilePic ? "" : " profilePicAlt"}`}
            onClick={profileAction}
            onMouseOver={()=>doPreload("profilePics")}
            onMouseLeave={()=>setClickedActive(false)}>
              <img
                className="mePicLayer1"
                src={profilePic ? "./assets/mePic-Asphodel-1.jpg" : "./assets/mePic-Asphodel-2.jpg"}
                alt="It's me, Paul. Hello!" />
              <div className="mePicLayerAnim mePicLayer2"></div>
              <div className="mePicLayerAnim mePicLayer3"></div>
              <div className={`faceSwitchIcon${clickedActive ? " clickedActive" : ""}`} aria-hidden="true">
                <FontAwesomeIcon icon={faCamera} /><span className="photoSlashPaint">/</span><FontAwesomeIcon icon={faPaintbrush} />
              </div>
            </div>
            <div className="headerText">
              <h2>Hi there!</h2>
              <h2>My name is</h2>
              <h1>Paul R.</h1>
            </div>
          </div>
          <h3>And I'm a web and software developer</h3>
        </div>
        <div className="learnMore">
          <h4>Learn More</h4>
          <h5 className="resumeHeading"><a href="https://lintbox.com/procca-resume-general.pdf" target="_blank" rel="noopener noreferrer">(Or cut right to it and see my resume here)</a></h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
