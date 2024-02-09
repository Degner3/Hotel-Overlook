import style from "./FrontPage.module.scss"
import { Title } from "../../Components/Title/Title";
import { Card } from "../../Components/Card/Card";
import { HeaderTitle } from "../../Components/HeaderTitle/HeaderTitle";
import { useFetch } from "../../Hooks/useFetch";
import { Link } from 'react-router-dom';


export const FrontPage = () => {

  // Henter nyheder ved hjælp af et custem hook til datahentning
  const news = useFetch("http://localhost:4000/news");
  // console.log("Sidste nyheder", news);
  
  // Henter detaljer om nyheder ved hjælp af et custem hook til datahentning
  const newsDetails = useFetch("http://localhost:4000/news/")
  // console.log("En news",newsDetails);
  
  return (
    <section className={style.frontPage}>
      <HeaderTitle title="Velkommen til hotel overlook online" />
      <section className={style.FrontPageWrapper}>
        <Title title="Sidste nyt" />
        <div className={style.newsContainer}>
          {news.data?.slice(0, 3).map((item) => {
            return (
              <Link to={`/news/${item.id}`} key={item.id}>
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  content={item.teaser}
                />
              </Link>
            );
          })}
        </div>
        <Title title="Se vores udvalg af værelser" />
        <div className={style.roomContainer}>
        </div>
      </section>
    </section>
  );
}
