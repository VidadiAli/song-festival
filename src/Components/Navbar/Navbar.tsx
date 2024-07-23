import { IoSearch } from "react-icons/io5";
import NavbarMenu from "./NavbarMenu";
import './Navbar.css'


const Navbar = () => {
    return (
        <div className="content-width navbar">
            <div className="first-part">
                <a href="index.html" className='logo'>
                    <span>SF</span>
                </a>
                <NavbarMenu />
            </div>
            <div className="second-part">
                <IoSearch />
            </div>
        </div>
    )
}

export default Navbar