import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss"
import { Navigation } from "../Components/Navigation/Navigation";
import { Footer } from "../Components/Footer/Footer";
import { SlideShow } from "../Components/SlideShow/SlideShow";

// Fast layout for alle sidder
export const MainLayout = () => {

  return (
    <main className={style.layout}>
        <Navigation/>
        <SlideShow/>
        <div className={style.content}>
          <Outlet/>
        </div>
        <Footer/>

    </main>
  )
}
