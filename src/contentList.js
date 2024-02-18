import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContentList = ({ contents }) => (
  <>
    {contents.map((content) => (
      <div className="board" key={content.id}>
        <Link to={`/contents/${contents.id}`} className='link-content'>
          <h2>
            Title:
            {contents.title}
          </h2>
          <p>
            Written by:
            {content.author}
          </p>
        </Link>
      </div>
    ))}
  </>
);

ContentList.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ContentList;