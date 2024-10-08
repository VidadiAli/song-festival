import { NavLink } from 'react-router-dom';
import { menu, menuType } from '../../data/data'


interface menuTypeAgain {
    elementName: menuType
}


const NavbarSecond = ({ elementName }: menuTypeAgain) => {

    let menuElement: string[] = [];

    return (
        <ul className='content-width'>
            {
                menu.map((e: menuType) => {
                    if (elementName.firstElementName === e.firstElementName && !menuElement.includes(e.secondElementName)) {
                        menuElement = [...menuElement, e.secondElementName];
                        return <li key={e.id}>
                            <img src={e.secondElementCover} alt="" />
                            <NavLink to={`/song-festival/${e.secondElementName}`}>{e.secondElementName}</NavLink>
                        </li>
                    }
                })
            }
        </ul>
    )
}

export default NavbarSecond