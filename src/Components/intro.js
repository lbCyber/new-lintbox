import {useState} from "react";

const Intro = ({background, lightMode}) => {

  const randNum = Math.floor(Math.random() * 4)

  const randGame = [
    'Dark Souls',
    'Elden Ring',
    'Bloodborne',
    'Darkest Dungeon'
  ]

  const companies = [
    [
      "Deloitte Digital",
      "./assets/companies/deloittedigital.png",
      "./assets/companies/deloittedigital-l.png"
    ],
    [
      "TWG: The Working Group",
      "./assets/companies/twg.png",
      "./assets/companies/twg.png"
    ],
    [
      "Shopify",
      "./assets/companies/shopify.png",
      "./assets/companies/shopify-l.png"
    ],
    [
      "Juno College of Technology",
      "./assets/companies/junocollege.png",
      "./assets/companies/junocollege-l.png"
    ]
  ]

  const [getGame, setGame] = useState(randGame[randNum])

  return (
    <section id="intro" className="aboutSection sectionBackground" style={background}>
      <div className="wrapper">
        <div>
          <p>I've worked for:</p>
          <ul className="companiesList">
            {companies.map((i,k)=>{
              const imgURL = lightMode ? i[2] : i[1]
              return (
                <li className="companyLogoItem">
                  <img className="companyLogo" src={imgURL} alt={i[0]} key={k} />
                </li>
              )
            })}
          </ul>
        </div>
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
