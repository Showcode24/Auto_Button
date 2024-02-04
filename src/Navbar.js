import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">

            <p>NOVA</p>
            <div className="links">
            <ul>
                <Link to='/'>Home</Link>
                <li>Home</li>
                <li>About</li>
                <li>Furniture</li>
                <li>Contact</li>
                <IoCartOutline />
            </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;