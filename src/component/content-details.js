import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import useFetch from '../hooks/use-fetch';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    blogs: blog,
    error,
    loading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/blogs/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
      });
  };

  return (
    <div className="blog-details">
      <h2>
        This is the blog details for blog with id -
        {id}
      </h2>
      {loading && <div> Your item is currently being fetched </div>}
      {error && <div>{error}</div>}

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div className="article-body">{blog.body}</div>

          <button type="button" onClick={() => handleDelete(blog.id)}>Delete this blog</button>

          <Link to={`/edit/${blog.id}`}>Edit this blog</Link>
        </article>

      )}
    </div>
  );
};

export default BlogDetails;