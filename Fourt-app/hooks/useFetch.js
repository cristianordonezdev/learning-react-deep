import { useEffect, useState } from 'react'

function useFetch(fetchFn, defaultData, messageError) {
  const [isFetching, setIsFetching] = useState(false);
  const [errorFetching, setError] = useState(messageError);
  const [fetchData, setFetchData] = useState(defaultData)

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || messageError });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    errorFetching,
    fetchData,
  }
}

export default useFetch;