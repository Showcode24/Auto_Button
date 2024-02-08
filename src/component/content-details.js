import { useNavigate, useParams } from "react-router";
import useFetch from "../hooks/use-fetch";
import axios from "axios";
import { Link } from "react-router-dom";

const ContentDetails = () => {    //you can use another name instead of id
    const { id } = useParams();
    const navigate = useNavigate();
const {
    contents: content, 
    error, 
    loading,
} = useFetch(`http://localhost:7000/contents/${id}`);
    
const handleDelete = (id)=>{
    axios.delete(`http://localhost:7000/contents/${id}`)
    .then((res)=>{
        navigate('/')
        // console.log(res)
    })

    .then()
    .catch((err)=>{
        console.log(err)
    })
}
    return (
        <div className="content-details">
            <h2>This is the blog details Component - {id} </h2>
            {loading && <div>Your item is been fetched</div>}
            {error && <div>{error}</div>}

    {content && <article>
        <h2>{content.title}</h2>
        <p>{content.author}</p>
        <div className="article-body">{content.body}</div>
        <button type="button" onClick={()=>handleDelete(content.id)}>Delete This Blog</button>
        <Link to={`/edit/${content.id}`}>Edit this blog</Link>
    </article>}
        </div>
    );
}

export default ContentDetails;