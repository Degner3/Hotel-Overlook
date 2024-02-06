import { useEffect, useState } from "react"
import style from "./SlideShow.module.scss"


export const SlideShow = () => {

    const [images, setImages] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let url = "http://localhost:4000/imagelist";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    console.log("Images:", images);

    const intervalid = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalid);
  }, [images]);

  return (
    images ? (
      <div className={style.SlideShow}
        style={{ backgroundImage: `url(${images[currentImage]?.filename})` }}>
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
}