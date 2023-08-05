import './Navbar.css';
import xSign from '../images/x-solid.svg';

import { useRef } from 'react';


// Components
import Button from '../components/button/Button'

import Logo from '../images/logo.png';

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.add("Navbar-Active");
        console.log("Working!")
    }
    const hideNavbar = () => {
        navRef.current.classList.remove("Navbar-Active")
    }

    return (
        <navbar className="Navbar">
            <img src={Logo} alt='Logo' />
            <ul className='navbar-items' onClick={hideNavbar} ref={navRef}>
                <img src={xSign} className='xSign' alt='xSign' />
                <li className='navbar-item'><a href='/'>Features</a></li>
                <li className='navbar-item'><a href='/'>Pricing</a></li>
                <li className='navbar-item'><a href='/'>Testimonial</a></li>
                <li className='navbar-item'><a href='/'>Instruction</a></li>
                <Button title={'Get template'} />
            </ul>
            <div className='Hamburger' onClick={showNavbar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </navbar>
    )
}

export default Navbar