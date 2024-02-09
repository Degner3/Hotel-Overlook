import style from "./Title.module.scss"

// komponent, der viser en titel
export const Title = ({ title }) => {

  return (
    <h2 className={style.titleStyle}>{title}</h2>
  )
}
