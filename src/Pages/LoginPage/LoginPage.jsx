import { Button } from "../../Components/Button/Button"
import { Title } from "../../Components/Title/Title"
import style from "./LoginPage.module.scss"

export const LoginPage = () => {

  
  return (
    <section className={style.loginStyle}>
      <section className={style.loginWrapper}>
        <Title title="Login" />
        <form className={style.loginForm}>
          <div className="input-container">
            <input type="text" required />
            <label>Brugernavn</label>
          </div>
          <div className="input-container">
            <input type="password" required />
            <label>Adgangskode</label>
          </div>
          <div className={style.buttonContainer}>
          <Button>Login</Button>
          <Button>Annuller</Button>
          </div>
        </form>
      </section>
    </section>
  );
}
