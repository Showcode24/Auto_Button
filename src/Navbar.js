import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar">
            <p>NOVA</p>
            <ul>
                <Link to='/'>Home</Link>
                <li>Home</li>
                <li>About</li>
                <li>Furniture</li>
                <li>Contact</li>
                <IoCartOutline />
            </ul>
        </div>
     );
}
 
export default Navbar;