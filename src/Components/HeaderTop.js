import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPaintbrush } from "@fortawesome/free-solid-svg-icons";
import doPreload from "./preloader";

const Header = (background) => {
  const [profilePic, setProfilePic] = useState(true);
  const [profileToggle, setProfileToggle] = useState(false);
  const [animReady, setAnimReady] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [clickedActive, setClickedActive] = useState(false);
  const [profileLoading, setProfileLoading] = useState(true);

  const profileAction = () => {
    if (animReady) {
      setProfilePic(!profilePic);
      setAnimReady(false);
      setProfileToggle(!profileToggle);
      setClickedActive(true);
      setTimeout(() => setAnimReady(true), 1500);
    }
  };

  useEffect(() => {
    if (profileLoading) {
      doPreload("profilePic", setProfileLoading).then(() => {
        setTimeout(() => {
          setFirstLoad(false);
          setProfileToggle(true);
        }, 1500);
        setTimeout(() => {
          setAnimReady(true);
        }, 3000);
      });
    } else {
      if (!profileToggle && !firstLoad) {
        setProfileToggle(!profileToggle);
      }
    }
  }, [profileToggle, firstLoad, profileLoading]);

  return (
    <header className="introSection" style={background}>
      <div className="wrapper">
        <div className="headerContainer">
          <div className="centerHeaderItems">
            <div className="backgroundStyle"></div>
            <div
              className={`profilePic${profileToggle ? " activeAnim" : ""} ${
                profilePic ? "" : " profilePicAlt"
              }`}
              onClick={profileAction}
              onMouseLeave={() => setClickedActive(false)}
            >
              <img
                className="mePicLayer1"
                src={
                  profilePic
                    ? "./assets/mePic-Asphodel-1.jpg"
                    : "./assets/mePic-Asphodel-2.jpg"
                }
                alt="It's me, Paul. Hello!"
              />
              <div className="mePicLayerAnim mePicLayer2" aria-hidden="true">
                <img src="./assets/mePic-Asphodel-silhouette.png" alt="" />
              </div>
              <div className="mePicLayerAnim mePicLayer3" aria-hidden="true">
                <img
                  className="mePicLayerImg1"
                  src="./assets/mePic-Asphodel-1.jpg"
                  alt=""
                />
                <img
                  className="mePicLayerImg2"
                  src="./assets/mePic-Asphodel-2.jpg"
                  alt=""
                />
              </div>
              <div
                className={`faceSwitchIcon${
                  clickedActive ? " clickedActive" : ""
                }`}
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={faCamera} />
                <span className="photoSlashPaint">/</span>
                <FontAwesomeIcon icon={faPaintbrush} />
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
          <p className="incomplete">
            I'm currently working on a large-scale site redesign, so check back
            soon for more!
          </p>
          <h5 className="resumeHeadingTop">
            In the meantime, you can find me at LinkedIn{" "}
            <a
              href="https://www.linkedin.com/in/procc/"
              rel="noopener noreferrer"
            >
              here
            </a>
            !
          </h5>
          <h5 className="resumeHeadingMiddle">
            Or you can cut right to it and see my resume{" "}
            <a
              href="https://lintbox.com/procca-resume-general.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            !
          </h5>
          <h5 className="resumeHeadingBottom">
            Or browse the old site{" "}
            <a
              href="https://lintbox.com/oldindex.html"
              rel="noopener noreferrer"
            >
              here
            </a>
            !
          </h5>
        </div>
      </div>
    </header>
  );
};

export default Header;