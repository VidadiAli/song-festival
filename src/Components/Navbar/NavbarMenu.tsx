import { menu, menuType } from '../../data/data'
import { NavLink } from 'react-router-dom';
import { HiMiniChevronDown } from "react-icons/hi2";
import NavbarFirst from './NavbarFirst';



const NavbarMenu = () => {

    let menuElement: string[] = [];

    return (
        <ul>
            {
                menu.map((e: menuType) => {
                    if (!menuElement.includes(e.name)) {
                        menuElement = [...menuElement, e.name];
                        return <li key={e.id}>
                            {
                                e.firstElementName !== '' ?
                                    <>
                                        <NavLink to={''}>
                                            {e.name} <HiMiniChevronDown className='chrow-down'/>
                                        </NavLink>
                                        <NavbarFirst elementName={e} />
                                    </>
                                    : <NavLink to={''}>{e.name}</NavLink>
                            }
                        </li>
                    }
                })
            }
        </ul>
    )
}

export default NavbarMenu