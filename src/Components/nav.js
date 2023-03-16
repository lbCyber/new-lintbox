const Nav = ({ reduceMotion, setReduceMotion, currentPage, setCurrentPage }) => {

  const reducedClick = () => {
    setReduceMotion(!reduceMotion)
  }

  return (
    <>
      <nav>
        <div className="wrapper">
          <ul className="">
            <li onClick={()=>setCurrentPage(0)}>bio</li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li onClick={()=>setCurrentPage(1)}>work</li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li onClick={()=>setCurrentPage(2)}>skills</li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li onClick={()=>setCurrentPage(3)}>contact</li>
          </ul>
          <h5 onClick={()=>reducedClick()}>{reduceMotion ? "Reduced Motion is ON" : "Reduced Motion is OFF"}</h5>
        </div>
      </nav>
    </>
  )
}

export default Nav;
