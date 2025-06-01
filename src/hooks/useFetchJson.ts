import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchJson = (url: string | null) => {
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await axios.get(url, { timeout: 5000 });
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message || "Errore nella richiesta");
        } else {
          setError("Errore sconosciuto");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};
