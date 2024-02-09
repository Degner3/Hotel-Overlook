import style from "./Card.module.scss"

// komponent til at vise et kort med billede, titel, teaser og indhold
export const Card = ({ image, title, teaser, content }) => {

  // Url til billedet
  const imgSrc = `http://localhost:4000/images/${image?.filename}`
  // console.log(imgSrc);
  
  // Styling til baggrundsbilledet
  const cardBackgroundStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative"
  };

  return (
    <div className={style.CardStyle} style={cardBackgroundStyle}>
        <img src={imgSrc} alt={title} />
        <article>
            <h3>{title}</h3>
            <p>{teaser}</p>
            <p>{content}</p>
        </article>
    </div>
  )
}
