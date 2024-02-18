import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Bloglist = ({ blogs }) => (
  <>
    {blogs.map((blog) => (
      <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          <h2>
            Title is
            {blog.title}
          </h2>
          <p>
            Written by
            {blog.author}
          </p>
        </Link>
      </div>
    ))}
  </>
);

Bloglist.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Bloglist;