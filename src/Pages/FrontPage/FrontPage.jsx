import { useEffect, useState } from "react"
import style from "./FrontPage.module.scss"
import { SlideShow } from "../../Components/SlideShow/SlideShow";


export const FrontPage = () => {

  const [imageList, setImageList] = useState([]);


  useEffect(() => {
    let url = "http://localhost:4000/imagelist"
    
    fetch(url)
    .then((res) => res.json())
    .then((data) => setImageList(data))
    .catch((err) => console.error(err))

    console.log("data", imageList[1]);
  }, [])

    
  return (
    <section className={style.frontPage}>
      <SlideShow/>
      <div>
        {imageList.map((image, i) => (
          <img key={i} src={image.filename} alt={image.title} />
        ))}
      </div>
    </section>
  );
}
