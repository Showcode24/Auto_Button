import { useEffect, useState } from "react";
import ContentList from "./contentList";
const Bod = () => {
    const [contents, setContents] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState('frontend')

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:7000/contents')
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
    }, []); //empty deendency array => run once


    return (
        <div className="Bod">
            <h1>The Furniture <br></br>you would love</h1>
            {loading && <div>Loading...</div>}

            {error && <div>{error}</div>}
            
            {contents && <ContentList contents={contents} />}
            
            {/* <button onClick={() => setCourse('backend')}>Click to Change Course</button> */}

            <p>{course}</p>
        </div>
    );
}
export default Bod;