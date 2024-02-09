import { NavLink } from "react-router-dom"
import style from "./Navigation.module.scss"
import Logo from "../../assets/Image/logo.svg"

// komponent til navigationen på websiden
export const Navigation = () => {

    // Array med objekter, der indeholder links og tilhørende side titler
    const navArr = [
        { Link: "/", Page: "Forside"},
        { Link: "/destinations", Page: "Hoteller & Destinationer" },
        { Link: "/rooms", Page: "Værelser" },
        { Link: "/reservations", Page: "Reservationer" },
        { Link: "/login", Page: "Login" },
    ]

  return (
    <nav className={style.navStyle}>
      <div className={style.navWrapper}>
        <img src={Logo} alt="HOTEL OVERLOOK" />
        <ul>
          {navArr.map((item, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={item.Link}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#FF0000" : "#FFFFFF",
                    };
                  }}
                >
                  {item.Page}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
