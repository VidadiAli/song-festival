import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='content-width'>
                <div>
                    <h2>Follow us</h2>
                    <ul>
                        <li><a href="#"><FaInstagram /> <span>instagram</span></a></li>
                        <li><a href="#"><RiYoutubeLine /> <span>youtube</span></a></li>
                        <li><a href="#"><TiSocialFacebookCircular /> <span>facebook</span></a></li>
                        <li><a href="#"><FaXTwitter /> <span>X</span></a></li>
                    </ul>
                </div>

                <div>
                    <h2>About us</h2>
                    <div>
                        <NavLink to={'/song-festival/about-us'} style={{ color: 'white', borderBottom: '1px solid white', paddingBottom: '2px' }}> Take a look</NavLink>
                    </div>
                </div>
                <div>
                    <h2>Write us</h2>
                    <form>
                        <label htmlFor="name">
                            <input type="text" placeholder='name: ' name='name' />
                        </label>
                        <label htmlFor="suname">
                            <input type="text" placeholder='surname: ' name='suname' />
                        </label>
                        <label htmlFor="email">
                            <input type='email' placeholder='mail: ' name='email' />
                        </label>
                        <label htmlFor="text">
                            <textarea name="text" placeholder='write' rows={7}></textarea>
                        </label>
                        <label htmlFor="">
                            <input type="button" value={'send'} />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer