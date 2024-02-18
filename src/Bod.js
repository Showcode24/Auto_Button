// import { useState } from 'react';
import ContentList from "./contentList";
import useFetch from './hooks/use-fetch';

const Bod = () => {
  // const [course, setCourse] = useState('frontend');

  // const course = 'frontend';

  const { contents, error, loading } = useFetch('http://localhost:7000/contents');

  // const secret = process.env.REACT_APP_API;

  // console.log(secret);

  return (
    <div className="Bod">
      <h1>The Furniture <br></br>you would love</h1>

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

      {contents && <ContentList contents={contents} />}

      {/* <p>{course}</p> */}
    </div>
  );
};

export default Bod;