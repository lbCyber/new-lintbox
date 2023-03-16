import { useEffect } from "react";

const imgURLs = {
  profilePic: [
    "../assets/mePic-Asphodel-silhouette.png",
    "../assets/mePic-Asphodel-1.jpg",
    "../assets/mePic-Asphodel-2.jpg"
  ]
}

const doPreload = (pics = "all") => {
  const preloadImages = (arr = []) => {
    arr.forEach((img)=>{
      const newImage = new Image();
      newImage.src = img;
      window[img] = newImage;
    })
  }
  if (pics === "all") {
    for (let category in imgURLs) {
      preloadImages(imgURLs[category])
    }
  } else {
    preloadImages(imgURLs[pics])
  }
}

const Preloader = () => {

  useEffect(() => {
    doPreload();
  })

  return (
    <div className="preload">
      {imgURLs.profilePic.map((img, k)=>{
        return <img src={img} key={k} alt="" aria-hidden />
      })}
    </div>
  )
}

export {Preloader as default, doPreload};
