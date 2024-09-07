import { menu, menuType } from '../../data/data'
import { NavLink } from 'react-router-dom';
import { HiMiniChevronDown } from "react-icons/hi2";
import NavbarSecond from './NavbarSecond';

interface menuTypeAgain {
    elementName: menuType
}

const NavbarFirst = ({ elementName }: menuTypeAgain) => {

    let menuElement: string[] = [];


    return (
        <ul>
            {
                menu.map((e: menuType) => {
                    if (elementName.name === e.name && !menuElement.includes(e.firstElementName)) {
                        menuElement = [...menuElement, e.firstElementName]
                        return <li key={e.id}>
                            {
                                e.secondElementName !== '' ?
                                    <>
                                        <NavLink to={`/${e.firstElementName}`}>
                                            {e.firstElementName} <HiMiniChevronDown className='chrow-down' />
                                        </NavLink>
                                        <NavbarSecond elementName={e} />
                                    </>
                                    : <NavLink to={`/${e.firstElementName}`}>{e.firstElementName}</NavLink>
                            }
                        </li>
                    }
                })
            }
        </ul>
    )
}

export default NavbarFirst