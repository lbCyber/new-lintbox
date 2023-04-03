const Nav = ({ reduceMotion, setReduceMotion, currentPage, setCurrentPage, lightMode, setLightMode }) => {

  const reducedClick = () => {
    setReduceMotion(!reduceMotion)
  }

  const lightModeClick = () => {
    setLightMode(!lightMode)
  }

  return (
    <>
      <nav>
        <div className="navContainer">
          <ul className="navOptions">
            <li>
              <a href="#intro">bio</a>
            </li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li>
              <a href="#work">work</a>
            </li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li>
              <a href="#skills">skills</a>
            </li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
          <h5 onClick={()=>reducedClick()}>{reduceMotion ? "Reduced Motion is ON" : "Reduced Motion is OFF"}</h5>
          <h5 onClick={()=>lightModeClick()}>{lightMode ? "Light Mode is ON" : "Light Mode is OFF"}</h5>
        </div>
      </nav>
    </>
  )
}

export default Nav;
