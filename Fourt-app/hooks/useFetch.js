import { useEffect, useState } from 'react'

function useFetch(fetchFn, defaultData) {
  const [isFetching, setIsFetching] = useState(false);
  const [errorFetching, setError] = useState("");
  const [getFetchData, setFetchData] = useState(defaultData)

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
    getFetchData,
    setFetchData
  }
}

export default useFetch;