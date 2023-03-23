const Nav = ({ reduceMotion, setReduceMotion, currentPage, setCurrentPage }) => {

  const reducedClick = () => {
    setReduceMotion(!reduceMotion)
  }

  return (
    <>
      <nav>
        <div className="navContainer">
          <ul className="navOptions">
            <li onClick={()=>setCurrentPage(0)}>
              <a href="#intro">bio</a>
              </li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li onClick={()=>setCurrentPage(1)}>
              <a href="#work">work</a>
              </li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li onClick={()=>setCurrentPage(2)}>
              <a href="#skills">skills</a>
              </li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li onClick={()=>setCurrentPage(3)}>
              <a href="#contact">contact</a>
              </li>
          </ul>
          <h5 onClick={()=>reducedClick()}>{reduceMotion ? "Reduced Motion is ON" : "Reduced Motion is OFF"}</h5>
        </div>
      </nav>
    </>
  )
}

export default Nav;
