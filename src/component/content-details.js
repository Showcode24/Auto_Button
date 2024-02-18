import { Link, useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/use-fetch';
import axios from 'axios';


const ContentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    contents,
    error,
    loading,
  } = useFetch(`http://localhost:7000/contents/${id}`);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:7000/contents/${id}`)
      .then((res) => {
        navigate('/');
      })
      .then()
      .catch((err) => {
        console.log(err)
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

      {contents && (
        <article>
          <h2>{contents.title}</h2>
          <p>{contents.author}</p>
          <div className="article-body">{contents.body}</div>

          <button type="button" onClick={() => handleDelete(contents.id)}>Delete this blog</button>

          <Link to={`/edit/${contents.id}`}>Edit this blog</Link>
        </article>

      )}
    </div>
  );
};

export default ContentDetails;