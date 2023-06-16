import {useState} from 'react';

const Codepen = () => {

  const peeks = [
    [
      "blank",
      "blank",
      "./assets/codepen/cp-hr.jpg",
      "https://paulroc.ca"
    ],
    [
      "Hallownest Respite",
      "An elaborate and layered animation I made, with over 100 unique frames but compact at 250kb",
      "./assets/codepen/cp-hr.jpg",
      "https://codepen.io/lbcyber/pen/BaLzpJY"
    ],
    [
      "Axolotl!",
      "An animated vector graphic image of an axolotl I made as my business' logo",
      "./assets/codepen/cp-axo.jpg",
      "https://codepen.io/lbcyber/pen/gOwaZzp"
    ],
    [
      "PSX Startup",
      "The original Playstation startup screen I recreated in CodePen, complete with old CRT scanline effects!",
      "./assets/codepen/cp-ps.jpg",
      "https://codepen.io/lbcyber/full/ExbmJmp"
    ],
  ]

  const [codePenPeek] = useState(peeks[Math.floor(Math.random() * 3) + 1])

  return (
    <aside className="codePenAside">
      <h4>Check out a CodePen!</h4>
      <a href={codePenPeek[3]} className="codePenBox" target="_blank" rel="noopener noreferrer">
        <div className="codePenImage">
          <img src={codePenPeek[2]} alt={codePenPeek[1]}/>
        </div>
        <p>{codePenPeek[0]}</p>
      </a>
    </aside>
  )
}

export default Codepen;