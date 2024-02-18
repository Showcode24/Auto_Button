import { Link, useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/use-fetch';
import axios from 'axios';


const ContentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    contents: content,
    error,
    loading,
  } = useFetch(`http://localhost:7000/contents/${id}`);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:7000/contents/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
      });
  };

  return (
    <div className="content-details">
      <h2>
        This is the blog details for blog with id -
        {id}
      </h2>
      {loading && <div> Your item is currently being fetched </div>}
      {error && <div>{error}</div>}

      {content && (
        <article>
          <h2>{content.title}</h2>
          <p>{content.author}</p>
          <div className="article-body">{content.body}</div>

          <button type="button" onClick={() => handleDelete(content.id)}>Delete this blog</button>

          <Link to={`/edit/${content.id}`}>Edit this blog</Link>
        </article>

      )}
    </div>
  );
};

export default ContentDetails;