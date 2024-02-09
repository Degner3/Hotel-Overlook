import { useEffect, useState } from "react"

// En custom hook til at hente data fra en given URL
export const useFetch = (url) => {

  // Opretter variable til at gemme data
  const [data, setData] = useState();
  // Opretter Variable til gemme hvis der fejl
  const [error, setError] = useState();

  // useEffect hook bruges til at udføre asynkrone operationer efter rendering
  useEffect(() => {

    // Fetcher data fra den givne URL
    fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((err) => setError(err));
  }, [url]);

  // Returnerer data og error, så de kan bruges
  return { data, error };
}

