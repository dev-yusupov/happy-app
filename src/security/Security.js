import './Security.css'

import PhotoSecurity from '../images/phone.png'

const SecurityImage = (props) => {
    return (
        <div className='SecurityImage'>
            <img src={PhotoSecurity} alt="Single" />
        </div>
    )
}

const SecurityText = () => {
    return (
        <div className='SecurityText'>
            <span>Speed & security</span>
            <h1>State-of-the-art processing capabilities.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
    )
}

const Security = () => {
    return (
        <div className='Security'>
            <SecurityImage />
            <SecurityText />
        </div>
    )
}


export default Security