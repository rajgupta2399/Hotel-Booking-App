// hooks/useHotelRates.js
import { useEffect, useState } from "react";

const useHotelRates = (options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelRates = async () => {
      try {
        const response = await fetch(
          "https://api.liteapi.travel/v3.0/hotels/rates",
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        // console.log(result);
        
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (options) {
      fetchHotelRates();
    }
  }, [options]);

  return { data, loading, error };
};

export default useHotelRates;
