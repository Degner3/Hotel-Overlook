import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import style from "./NewsDetailPage.module.scss"
import { Title } from '../../Components/Title/Title';


export const NewsDetailPage = () => {

  // Henter id-parameteren fr url-en
  const { id } = useParams();
  const navigate = useNavigate()

  // Henter detaljer om en enkelt nyhed id'en fra URL'en
  const newsDetails = useFetch(`http://localhost:4000/news/${id}`)
  const oneNews = newsDetails.data;
  // console.log("En news", oneNews);

  // Funktion til at navigere tilbage til forsiden
  const goBack = () => {
    navigate('/');
  };

  return (
    <section className={style.newsDetails}>
      <section className={style.detailsWrapper}>
        <img src={oneNews?.title} alt={oneNews?.title} />
        <article>
          <Title title={oneNews?.title} />
          <h3>{oneNews?.teaser}</h3>
          <p>{oneNews?.content}</p>
          <button onClick={goBack}>Go Back</button>
        </article>
      </section>
    </section>
  );
}
