import { useState } from "react";
const Bod = () => {
    const[contents, setContents] = useState (
        [
            {id: 1, author: "Tobi", title: "Italian Marble Wood", body:"Lore Ipsum...."},
            {id: 2, author: "Emmanuel", title: "Dawnish Walnut", body:"Lore Ipsum...."},
            {id: 3, author: "Ayooluwa", title: "African Fibre", body:"Lore Ipsum...."}
        ]
    );
    return ( 
        <div className="Bod">
            <h1>The Furniture <br></br>you would love</h1>
            {contents.map((contents, index)=>(
                <div className="board" key={contents.id}>
                    <h2>Title: {contents.title}</h2>
                    <p>Written by {contents.author}</p>
                </div>
            ))}
        </div>
     );
            }
export default Bod;