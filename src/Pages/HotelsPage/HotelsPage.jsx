import { HeaderTitle } from "../../Components/HeaderTitle/HeaderTitle"
import style from "./HotelsPage.module.scss"
import { useFetch } from "../../Hooks/useFetch"
import { Title } from "../../Components/Title/Title"


export const HotelsPage = () => {

  // Henter alle lande ved hjælp af et custom hook til datahentning
  const allContries  = useFetch(`http://localhost:4000/destinations`);
  const countries = allContries.data;
  // console.log("Lande", countries);

    
  return (
    <section className={style.hotelsStyle}>
      <HeaderTitle title="HOTELLER & DESTINATIONER" />
      <ul>
        {countries?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <section className={style.hotelsWrapper}>
        <Title title="Vores hoteller i Island" />
        <p>Midt i det nordlige Atlanterhav finder du et moderne samfund bygget på traditioner og fortællinger helt tilbage fra vikingetiden. Den magiske natur byder på vulkaner, gejsere, gletsjere, fjorde og vandfald. Og i farvandet omkring øen finder du sæler, delfiner, spækhuggere og pukkelhvaler. Du finder også et rigt kulturliv med masser af festivaler, som foregår hele året rundt.</p>
        <div className={style.countryContainer}>
        </div>
      </section>
    </section>
  );
}




