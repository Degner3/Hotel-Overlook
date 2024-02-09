import style from "./Button.module.scss"

// komponent til at vise en knap med styling
export const Button = ({children}) => {
  return (
    <button className={style.buttonStyle}>{children}</button>
  )
}
