import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">

            <p>NOVA</p>
            <div className="links">
            <ul>
                <Link to='/' className="links-text">Home</Link>
                <Link to='/about' className="links-text">About</Link>
                <Link to='/furniture' className="links-text">Furniture</Link>
                <Link to='/contact' className="links-text">Contact</Link>
                
                <IoCartOutline />
            </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;