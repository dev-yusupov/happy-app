import './Footer.css';

import HappyVertical from "../images/happy-vertical.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";


const Footer = () => {
    return (
        <div className='Footer'>
            <img src={HappyVertical} alt='Vertical Logo' />
            <div className='SocialIcons'>
                <img src={Twitter} alt='Twitter' />
                <img src={Instagram} alt='Instagram' />
                <img src={Facebook} alt='Facebook' />
            </div>
            <p>All rights reserved by <b>ANUR.TECH</b>. MIT Licenced.</p>
        </div>
    )
}

export default Footer