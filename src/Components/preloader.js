import { useEffect } from "react";

const Preloader = () => {

  const imgURLs = [
    "../assets/mePic-Asphodel-silhouette.png",
    "../assets/mePic-Asphodel-2.jpg",
    "../assets/mePic-Asphodel-2.jpg"
  ]

  const doPreload = () => {
    imgURLs.forEach((img)=>{
      const newImage = new Image();
      newImage.src = img;
      window[img] = newImage;
    })
  }

  useEffect(() => {
    doPreload();
  })

  return (
    <div className="preload">
      {imgURLs.map((img, k)=>{
        return <img src={img} alt="" key={k} aria-hidden />
      })}
    </div>
  )
}

export default Preloader;
