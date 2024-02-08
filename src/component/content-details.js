import { useParams } from "react-router";
import useFetch from "../hooks/use-fetch";

const ContentDetails = () => {
    const { number } = useParams();

const {contents: content, error, loading} = useFetch(`http://localhost:7000/contents/${number}`);
    console.log(content)

    return (
        <div className="content-details">
            <h2>This is the blog details Component - {number} </h2>
            {loading && <div>Your item is been fetched</div>}
            {error && <div>{error}</div>}

    {content && <article>
        <h2>{content.title}</h2>
        <p>{content.author}</p>
        <div className="article-body">{content.body}</div>
    </article>}
        </div>
    );
}

export default ContentDetails;