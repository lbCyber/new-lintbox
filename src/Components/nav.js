const Nav = ({ reduceMotion, setReduceMotion }) => {

  const reducedClick = () => {
    setReduceMotion(!reduceMotion)
  }

  return (
    <>
      <nav>
        <div className="wrapper">
          <ul className="">
            <li>bio</li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li>work</li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li>skills</li>
            {/* eslint-disable-next-line*/}
            <span className="">//</span>
            <li>contact</li>
          </ul>
          <h5 onClick={()=>reducedClick()}>{reduceMotion ? "Reduced Motion is ON" : "Reduced Motion is OFF"}</h5>
        </div>
      </nav>
    </>
  )
}

export default Nav;
