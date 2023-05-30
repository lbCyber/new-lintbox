const doPreload = async (imgObj,setimgState) => {
  // ONLY USED IN NICHE CASES
  const imgURLs = {
    profilePic: [
      "../../assets/mePic-Asphodel-silhouette.png",
      "../../assets/mePic-Asphodel-1.jpg",
      "../../assets/mePic-Asphodel-2.jpg",
    ],
  };
  const promises = await imgURLs[imgObj].map((src) => {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });
  await Promise.all(promises);
  setimgState(false);
};

export default doPreload;
