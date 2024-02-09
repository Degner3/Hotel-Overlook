import style from "./HeaderTitle.module.scss"

// komponent til at vise en overskrift med en baggrundseffekt
export const HeaderTitle = ({ title }) => {
  
  return (
    <section className={style.headTitle}>
      <div className={style.blackContainer}></div>
      <h1>{title}</h1>
      <div className={style.redContainer}></div>
    </section>
  )
}
