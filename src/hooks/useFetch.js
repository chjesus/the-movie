import { useState, useEffect } from "react";

export default function useFecth(url, options) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const urlStorage = localStorage.getItem(url);
    // if (urlStorage) {
    //   const urlArray = JSON.parse(urlStorage);

    //   if (urlArray) {
    //     console.log("entro");
    //     console.log(urlArray);
    //     setResult(urlArray);
    //     setLoading(false);
    //   }
    // } else {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json);
        // localStorage.setItem(url, JSON.stringify(json));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
    // }
  }, [url]);

  return { loading, result, error };
}
