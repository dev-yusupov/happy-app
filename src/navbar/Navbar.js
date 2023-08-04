import './Navbar.css';

// Components
import Button from '../components/button/Button'

import Logo from '../images/logo.png';

const Navbar = () => {
    return (
        <navbar className="Navbar">
            <img src={Logo} alt='Logo' />
            <ul className='navbar-items'>
                <li className='navbar-item'><a href='/'>Features</a></li>
                <li className='navbar-item'><a href='/'>Pricing</a></li>
                <li className='navbar-item'><a href='/'>Testimonial</a></li>
                <li className='navbar-item'><a href='/'>Instruction</a></li>
                <Button title={'Get template'} />
            </ul>
            <div className='Hamburger'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </navbar>
    )
}

export default Navbar