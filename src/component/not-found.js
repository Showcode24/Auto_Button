import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="contact">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/" className="contact-link">Back to the homepage....</Link>
        </div>
     );
}
 
export default NotFound;