import { NavLink } from "react-router-dom"
import style from "./Footer.module.scss"
import { FaTwitterSquare, FaFacebook } from "react-icons/fa";

// komponent til at vise footeren på websiden
export const Footer = () => {

  // Array med objekter, der indeholder links og tilhørende side titler
  const navArr = [
    { Link: "/", Page: "Forside"},
    { Link: "/destinations", Page: "Hoteller & Destinationer" },
    { Link: "/rooms", Page: "Værelser" },
    { Link: "/reservations", Page: "Reservationer" },
    { Link: "/login", Page: "Login" },
]

  return (
    <footer className={style.footerStyle}>
      <div className={style.footerWrapper}>
        <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
        <div className={style.socials}>
          <FaTwitterSquare className={style.twitterLogo} />
          <FaFacebook className={style.fbLogo} />
        </div>
        <ul>
          {navArr.map((item, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={item.Link}
                >
                  {item.Page}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
