import './Technology.css'

import PhotoTechnology from '../images/phone-technology.png'

const TechnologyText = () => {
    return (
        <div className='TechnologyText'>
            <span>TEchnology</span>
            <h1>Use H(app)y to give your digital photos some pop.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
    )
}

const TechnologyImage = () => {
    return (
        <div className='TechnologyImage'>
            <img src={PhotoTechnology} alt='PhotoTechnology' />
        </div>
    )
}

const Technology = (props) => {
    return (
        <div className='Technology'>
            <TechnologyText />
            <TechnologyImage />
        </div>
    )
}

export default Technology