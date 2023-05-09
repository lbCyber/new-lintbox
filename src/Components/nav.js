const Nav = ({ reduceMotion, setReduceMotion, currentPage, setCurrentPage, lightMode, setLightMode }) => {

  const reducedClick = () => {
    setReduceMotion(!reduceMotion)
  }

  const lightModeClick = () => {
    setLightMode(!lightMode)
  }

  return (
    <>
    </>
  )
}

export default Nav;
