const preloader = () => {

  const imgURLs = [
    "./assets/mePic-Asphodel-silhouette.png",
    "./assets/mePic-Asphodel-1.jpg",
    "./assets/mePic-Asphodel-2.jpg"
  ]

  imgURLs.forEach((img)=>{
    const newImage = new Image();
    newImage.src = img;
    window[img] = newImage;
  })
}

export default preloader;
