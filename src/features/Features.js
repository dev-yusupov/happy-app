import './Features.css';
import Feature from '../components/feature/Feature';

import PhoneBlack from '../images/phone-black.png'
import PhoneList from '../images/phone-list.png'
import PhoneFocusMode from '../images/phone-focus-mode.png'
import Phone from '../images/phone.png'

const Features = () => {
    return (
        <div className='Features'>
            <span>Features</span>
            <h2>The latest & greatest in phone photography.</h2>

            <div className='Features-Items'>
                <div className='Top-Section'>
                    <Feature image={PhoneBlack} title={'Calendar view'} titleColor={'#0278ED'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.'} />
                    <Feature image={PhoneList} title={'Lists'} titleColor={'#FF5437'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.'} />
                    <Feature image={PhoneBlack} title={'Varied type'} titleColor={'#FF9209'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.'} />
                </div>
            </div>
            <div className='Features-Items'>
                <div className='Top-Section'>
                    <Feature image={Phone} title={'Split-screen'} titleColor={'#E738CE'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.'} />
                    <Feature image={PhoneBlack} title={'Uploads'} titleColor={'#00C6DF'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.'} />
                    <Feature image={PhoneFocusMode} title={'Focus mode'} titleColor={'#B25DF8'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.'} />
                </div>
            </div>
        </div>
    )
}

export default Features