import {useState} from "react";
import Companies from "./modules/Companies";

const Intro = ({background, lightMode, reduceMotion}) => {

  const randNum = Math.floor(Math.random() * 4)

  const randGame = [
    'Dark Souls',
    'Elden Ring',
    'Bloodborne',
    'Darkest Dungeon'
  ]

  const [getGame, setGame] = useState(randGame[randNum])

  return (
    <section id="intro" className="aboutSection sectionBackground" style={background}>
      <div className="companiesContainer">
        <Companies lightMode={lightMode} reduceMotion={reduceMotion}/>
      </div>
      <div className="wrapper">
        <div>
          <h5>About</h5>
          <p>
            I'm a web developer and software engineer based in Toronto, Ontario with +5 years experience developing fully-realized top-down web solutions for clients using Javascript, React, HTML/CSS, Ruby-on-Rails and Wordpress architectures. My goals are always to learn, improve, and employ modern accessibility standards to build a better web for all.
          </p>
          <p>
            I'm also an LGBTQ+ man with an indomitable passion for fostering equitable and supportive workspaces and environments for all, having collaborated with multiple Diversity, Equity and Inclusion committees to ensure access and safety for all visible and invisible minority groups.
          </p>
          <p>
            When I'm not coding, you'll find me reading or watching the latest horror novels and movies, gushing about Godzilla facts<span className="aside">(trust me I have so many)</span>, or playing <span className="strikeout">fun new video games.</span> <span className="interrupt">mostly {getGame}</span>
          </p>
          <p>
            I also manage the Laura S. Rocca fund, a charity that has raised over $125,000 for cancer research at the <a href="https://www.uhn.ca/PrincessMargaret" target="_blank" rel="noopener noreferrer">Princess Margaret Hospital</a> in Toronto.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro;
