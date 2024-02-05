import { useEffect, useState } from "react";
import ContentList from "./contentList";
import useFetch from "./hooks/use-fetch";

const Bod = () => {
    
    const [course, setCourse] = useState('frontend')

  const {contents, error, loading} = useFetch('http://localhost:7000/contents');

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