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

  return (
    <aside className="codePenAside">
    </aside>
  )
}

export default Codepen;