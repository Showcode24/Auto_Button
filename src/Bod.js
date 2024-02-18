// import { useState } from 'react';
import Bloglist from './components/bloglist';
import useFetch from './hooks/use-fetch';

const Home = () => {
  // const [course, setCourse] = useState('frontend');

  // const course = 'frontend';

  const { blogs, error, loading } = useFetch('http://localhost:8000/blogs');

  // const secret = process.env.REACT_APP_API;

  // console.log(secret);

  return (
    <div className="home">
      <h2>Home Component</h2>

      <div className="wrapper">
        <div className="red">
          red
          sjkfkvkjvjdsbvksjvbsdkjvbsdvk
        </div>
        <div className="blue">blue</div>
        <div className="orange">orange</div>
      </div>

      {loading && <div>Your item is being fetched</div>}

      {error && <div className="error">{error}</div>}

      {blogs && <Bloglist blogs={blogs} />}

      {/* <p>{course}</p> */}
    </div>
  );
};

export default Home;