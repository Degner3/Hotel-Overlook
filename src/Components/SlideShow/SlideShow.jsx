import { useEffect, useState } from "react"
import style from "./SlideShow.module.scss"

// komponent til en billedeslider
export const SlideShow = ({ children }) => {

    // Til at gemme billederne og indekset for det aktuelle billede
    const [images, setImages] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    // Til hente billederne fra serveren
  useEffect(() => {
    let url = "http://localhost:4000/imagelist";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  // Til at den skifter billeder automatisk
  useEffect(() => {
    // console.log("Images:", images);

    const intervalid = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalid);
  }, [images]);

  return (
    images ? (
      <div className={style.slideShow}
        style={{ backgroundImage: `url(${images[currentImage]?.filename})` }}>
          {children}
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
}