import { menu, menuType } from '../../data/data'
import { NavLink } from 'react-router-dom';
import { HiMiniChevronDown } from "react-icons/hi2";
import NavbarFirst from './NavbarFirst';

interface toggleTip {
    toggle: boolean
}

const NavbarMenu = ({ toggle }: toggleTip) => {

    let menuElement: string[] = [];

    return (
        <ul className={`${toggle ? 'toggle-active' : ''}`}>
            {
                menu.map((e: menuType) => {
                    if (!menuElement.includes(e.name)) {
                        menuElement = [...menuElement, e.name];
                        return <li key={e.id}>
                            {
                                e.firstElementName !== '' ?
                                    <>
                                        <NavLink to={''}>
                                            {e.name} <HiMiniChevronDown className='chrow-down' />
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