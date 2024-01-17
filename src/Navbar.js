import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
    return ( 
        <div className="navbar">
            <p>NOVA</p>
            <ul>
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