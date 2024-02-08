import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [contents, setContents] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // 'http://localhost:7000/contents'

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error('Service is currently busy. Please try again later')
                    }
                    return response.json()
                })
                .then((contentsArray) => {
                    setContents(contentsArray)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err.message)
                    setError(err.message)
                    setLoading(false)
                })
        }, 3000)
    }, [url]); //empty dependency array => run once

    return {contents, error, loading} 

}

export default useFetch;