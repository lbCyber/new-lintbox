const Footer = () => {

  const currYear = new Date().getFullYear()

  return (
    <footer>
      <p>Copyright © Paul Rocca - {currYear}</p>
    </footer>
  )
}

export default Footer;
