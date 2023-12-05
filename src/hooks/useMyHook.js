import { useState, useEffect } from "react";

export const useMyHook = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const loadData = async () => {
      try {
        const req = await fetch(url);

        const res = await req.json();

        if (res.length === 0) {
          setError("Não há dados disponíveis.");
        } else {
          setData(res);
        }
      } catch (error) {
        setError("Problemas no servidor...");
        console.log("Error " + error);
      }

      setLoading(false);
    };

    loadData();
  }, [url]);

  return { data, loading, error };
};
