import { useState } from 'react';
import useEffectOnce from './useEffectOnce';

function useFetch(fetchFn, defaultData) {
  const [isFetching, setIsFetching] = useState(false);
  const [errorFetching, setError] = useState("");
  const [getFetchData, setFetchData] = useState(defaultData);

  useEffectOnce(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || "Error fetching data" });
      }
      setIsFetching(false);
    }
    fetchData();
  });

  return {
    isFetching,
    errorFetching,
    getFetchData,
    setFetchData
  };
}

export default useFetch;