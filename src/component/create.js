import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/use-fetch";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('Tobi');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const {id} = useParams();

    // useEffect(()=>{
    //     const {
    //         contents: content,
    //         error,
    //         loading,
    //     } = useFetch(`https://localhost:8000/blogs/${id}`);
    // } )

    const handleSubmit = (e) => {
        setLoading(true)    
        //you would need this line in every form handing function you wouldbe wr
        e.preventDefault();
        // console.log(title, author, body)

        setTimeout(()=>{

            const newContent = {title, author, body}       //Note ={} means equals to empty object
        
            const postUrl = 'http://localhost:7000/contents'
        
        //You can either use just fetch('http://localhost:7000/contents') directly without declaring it with posturl
      
        fetch (postUrl, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newContent)        //newContent is representation of what you want to send to the sever
        })

        //when you are using DELETE there would be no need for the body, just the method and headers is enough
       
        .then((res)=>{
           
            res.json()
            setLoading(false)
            navigate('/') //-1 can be used
            // console.log(result)
        })
        //we used only one then method in this one because the POST method requires only one
        .catch((err)=>{
            console.log(err)
        })      //This feature helps to know if there is any error and displays it on the console
        }, 3000)
    }
    return ( 
        <div className="create">
            <h2 style={{textAlign: "center"}}>Add New Content</h2> 
        
        <form className="form" onSubmit={handleSubmit}>
            <label>
                <span>Title</span>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                ></input>
            </label>

            <label>
                <span>Author</span>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Ayooluwa">Ayooluwa</option>
                    <option value="Emmanuel">Emmanuel</option>
                    <option value="Tobi">Tobi</option>
                </select>
            </label>

            <label>
                <span>Body</span>
                <textarea
                rows={7}
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
            </label>

            
            {!loading && <button type="submit">Submit</button> }    
            {loading && <button type="submit" disabled>Posting your blog</button> }
        </form>
        </div>
     );
}
 
export default Create;