import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Tobi');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setAuthor(data.author);
          setBody(data.body);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const newBlog = { title, author, body };

      const postUrl = 'http://localhost:8000/blogs';
      const putUrl = `http://localhost:8000/blogs/${id}`;

      const resolvedUrl = id ? putUrl : postUrl;

      fetch(resolvedUrl, {
        method: id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBlog),
      })
        .then((res) => {
          res.json();
          setLoading(false);
          navigate('/');
        })
        .catch(() => {
        });
    }, 3000);
  };

  return (
    <div className="create">
      <h2 style={{ textAlign: 'center' }}>
        {id ? `Edit blog number ${id}` : 'Add a new blog'}
      </h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="blogTitle">
          Blog Title:
          <input
            type="text"
            required
            id="blogTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}

          />
        </label>

        <label htmlFor="blogAuthor">
          Blog Author:
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            id="blogAuthor"
          >
            <option value="Tobi">Tobi</option>
            <option value="AyoOluwa">AyoOluwa</option>
            <option value="Emmanuel">Emmanuel</option>
          </select>
        </label>

        <label htmlFor="blogBody">
          Blog Body:
          <textarea
            rows={7}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            id="blogBody"
          />
        </label>

        {!loading && (
        <button type="submit">

          {id ? 'Update your blog' : 'Submit a blog'}

        </button>
        )}
        {loading && <button type="submit" disabled>Posting your Blog...</button>}
      </form>
    </div>
  );
};

export default Create;