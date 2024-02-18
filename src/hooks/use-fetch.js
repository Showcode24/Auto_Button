import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [contents, setContents] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // true false

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error('Server is busy. Please try again later.');
          }
          return response.json();
        })
        .then((item) => {
          setContents(item);
          setLoading(false);
        })
        .catch((e) => {
          // console.log(e.message);
          setError(e.message);
          setLoading(false);
        });
    }, 1000);
  }, [url]); // include url as a dependency to revent infinite loop

  return { contents, error, loading };
};

export default useFetch;