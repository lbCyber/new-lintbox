import {useState, useEffect} from "react";

const Skills = ({background}) => {

  const skillList = [
    ["css", "CSS"],
    ["git", "Git/GitHub"],
    ["html5", "HTML5"],
    ["javascript", "JavaScript"],
    ["kotlin", "Kotlin"],
    ["mongodb", "MongoDB"],
    ["mysql", "MySQL"],
    ["node", "node"],
    ["python", "Python"],
    ["react", "React"],
    ["rubyonrails", "Ruby On Rails"],
    ["sass", "SASS/SCSS"],
    ["typescript", "TypeScript"],
    ["wordpress", "Wordpress"],
    ["yaml", "YAML"],
  ];

  const peeks = [
    ['blank', 'imgsrc', 'https://paulroc.ca'],
    ['hallownest', 'imgsrc', 'https://codepen.io/lbcyber/pen/BaLzpJY'],
    ['axo', 'imgsrc', 'https://codepen.io/lbcyber/pen/gOwaZzp'],
    ['psx', 'imgsrc', 'https://codepen.io/lbcyber/full/ExbmJmp'],
  ]

  const randPeek = Math.floor(Math.random() * 3) + 1
  const [getPeek, setPeek] = useState(peeks[randPeek])

  return (
    <section id="skills" className="skillsSection sectionBackground" style={background}>
      <div className="wrapper">
        <div>
          <blockquote>
            <p>Paul's technical expertise shines through their work - they onboarded in just a few weeks and immediately began contributing to the overall team output. They were autonomous in all they did, and both challenged and improved our processes. This directly contributed to the team hitting 99% of their goal in the 1st half of 2022.</p>
            <p>Simply put, Paul leaves things better than they found them. They are both great and passionate at their craft - Paul is reliable and helped us ship some of our most challenging experiments and features. They also helped onboard full-time developers onto the crew, which accelerated the time to impact for our newer team members.</p>
            <p>Paul was a beacon of light, radiating energy and positivity in everything they did for our crew, and always with a smile. Any team would be lucky to have them!</p>
            <p className="quoteAttr">Carlos Lazo, Staff Software Engineer at Shopify</p>
          </blockquote>
        </div>
        <div>
          {/*{skillList.map((skill, key) => {
            return (
              <img
                className="devIcon"
                src={`./assets/devicons/${skill[0]}.svg`}
                alt={skill[1]}
                key={key} />
            );
          })}*/}
        </div>
        <aside>
          <p>Check out a codepen!</p>
          <a href={getPeek[2]} target="_blank" rel="noopener noreferrer">{getPeek[0]}</a>
        </aside>
      </div>
    </section>
  )
}

export default Skills;
