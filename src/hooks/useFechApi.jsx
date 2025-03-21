import { useState, useCallback } from "react";
import axios from "axios";

export function useFechApi() {
  const [data, setData] = useState(null); datos
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url) => {
    setLoading(true);
    setError(null);
    setData(null); // Reiniciar datos en cada petición
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      if (err.response && err.response.status === 500) {
        setError("Location not found. Please enter a valid ID.");
      } else {
        setError(err.response?.data?.message || err.message);
      }
      setData(null);
    } finally {
        setLoading(false);  
    }
  }, []);

  return { data, loading, error, request };
}
