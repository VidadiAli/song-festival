import { IoSearch } from "react-icons/io5";
import NavbarMenu from "./NavbarMenu";
import './Navbar.css'
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";


const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const toggleProses = () => {
        setToggle(!toggle);
    }

    return (
        <div className="content-width navbar">
            <div className="first-part">
                {
                    window.innerWidth <= 992 ? <RiMenu3Fill className="menu-icon" onClick={toggleProses} /> : ''
                }
                <a href="index.html" className='logo'>
                    <span>SF</span>
                </a>
                <NavbarMenu toggle={toggle} />
            </div>

            <div className="second-part">
                <IoSearch style={{ width: '20px', height: '20px' }} />
            </div>
        </div>
    )
}

export default Navbar