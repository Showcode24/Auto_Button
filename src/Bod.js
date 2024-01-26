import { useEffect, useState } from "react";
import ContentList from "./contentList";
const Bod = () => {
    const [contents, setContents] = useState(null);
      /*  [
            { id: 1, author: "Tobi", title: "Italian Marble Wood", body: "Lore Ipsum...." },
            { id: 2, author: "Emmanuel", title: "Dawnish Walnut", body: "Lore Ipsum...." },
            { id: 3, author: "Ayooluwa", title: "African Fibre", body: "Lore Ipsum...." }
        ]
    );
    */

    const [course, setCourse] = useState('frontend')

    useEffect(() => {
        fetch('http://localhost:7000/contents')
            .then((response) => {
             return response.json()
            })
            .then((contentsArray) => {
                console.log(contentsArray)
                setContents(contentsArray)
            })
    }, []);


    const handleDelete = (id) => {
        console.log('The id of the clickedd blog is', id)

        const filteredcontents = contents.filter((contents, index) => contents.id !== id)
        setContents(filteredcontents)
    }
    return (
        <div className="Bod">
            <h1>The Furniture <br></br>you would love</h1>
            {contents && <ContentList contents={contents} handleDelete={handleDelete} />}
            <button onClick={() => setCourse('backend')}>Click to Change Course</button>

            <p>{course}</p>
        </div>
    );
}
export default Bod;