import {useState} from "react";

const Intro = ({background}) => {

  const randNum = Math.floor(Math.random() * 4)

  const randGame = [
    'Dark Souls',
    'Elden Ring',
    'Bloodborne',
    'Darkest Dungeon'
  ]

  const [getGame, setGame] = useState(randGame[randNum])

  return (
    <section id="intro" className="aboutSection" style={background}>
      <div className="wrapper">
        <div>
          <h5>About</h5>
          <p>
            I'm an LGBTQ+ man with an indomitable passion for fostering equitable and supportive workspaces and environments for all, having collaborated with multiple Diversity, Equity and Inclusion committees to ensure access and safety for all visible and invisible minority groups.
          </p>
          <p>
            When I'm not coding, you'll find me reading or watching the latest horror novels and movies, gushing about Godzilla facts<span className="aside">(trust me I have so many)</span>, or playing <span className="strikeout">fun new video games.</span> <span className="interrupt">mostly {getGame}</span>
          </p>
          <p>
            I also manage the Laura S. Rocca fund, a charity that has raised over $125,000 for cancer research at the <a href="https://www.uhn.ca/PrincessMargaret" target="_blank" rel="noopener noreferrer">Princess Margaret Hospital</a> in Toronto.
          </p>
        </div>
        <blockquote>
          <p>Paul's technical expertise shines through their work - they onboarded in just a few weeks and immediately began contributing to the overall team output. They were autonomous in all they did, and both challenged and improved our processes. This directly contributed to the team hitting 99% of their goal in the 1st half of 2022.</p>
          <p>Simply put, Paul leaves things better than they found them. They are both great and passionate at their craft - Paul is reliable and helped us ship some of our most challenging experiments and features. They also helped onboard full-time developers onto the crew, which accelerated the time to impact for our newer team members.</p>
          <p>Paul was a beacon of light, radiating energy and positivity in everything they did for our crew, and always with a smile. Any team would be lucky to have them!</p>
          <p className="quoteAttr">Carlos Lazo, Staff Software Engineer at Shopify</p>
        </blockquote>
      </div>
    </section>
  )
}

export default Intro;
