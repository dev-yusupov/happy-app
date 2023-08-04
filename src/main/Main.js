import './Main.css'

// Components
import Button from '../components/button/Button'

// Images
import Logo from '../images/logo.png'
import PhonePoster from '../images/phone.png'

const Main = () => {
    return (
        <main>
            <div className='Main-Text-Section'>
                <img src={Logo} alt='Logo is main' />
                <h1 className='Main-Title'>The future of digital photos.</h1>
                <p className='Main-Description'>The H(app)y app is the latest & greatest in phone photography. It's available in the App Store right now. Go check it out!</p>
                <div className='Main-Text-Section-Button'>
                    <Button title={'Download'} />
                    <Button title={'Read more'} />
                </div>
            </div>
            <div className='Poster'>
                <img src={PhonePoster} alt='Main' />
            </div>
        </main>
    )
}

export default Main