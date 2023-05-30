const common = {
  doBackgroundGen: (lightMode) => {
    let dir = 1;
    if (Math.floor(Math.random() + 1) > 0) {
      dir = -1;
    }

    const rot = Math.floor(Math.random() * 720) - 360,
          pie1 = Math.floor((Math.random() * 75) + ((Math.random() * 40) - 20)),
          pie2 = Math.min(Math.floor(Math.random() * (pie1 + 2)) + pie1 + (Math.random() * dir * 20), 80),
          pie3 = Math.min(Math.floor(Math.random() * (pie2 + 2)) + pie2 + (Math.random() * dir * 20), 90);

    let colour1, colour2, colour3
    if (lightMode) {
      colour1 = "#D8DEE6"
      colour2 = "#D1CCD8"
      colour3 = "#C8D7EB"
    } else {
      colour1 = "#111112"
      colour2 = "#1A1B22"
      colour3 = "#2B333C"
    }

    return {backgroundImage: `linear-gradient(${rot}deg, ${colour1} 0% ${pie1}%, transparent ${pie1}% 100%), linear-gradient(${rot + 40 * dir}deg, ${colour2} 0% ${pie2}%, transparent ${pie2}% 100%), linear-gradient(${rot + 80 * dir}deg, ${colour3} 0% ${pie3}%, transparent ${pie3}% 100%)`}
  }
}

export default common;