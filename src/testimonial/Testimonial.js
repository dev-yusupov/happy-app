import './Testimonial.css'

import Pam from '../images/pam.png';
import Michael from '../images/michael.png';
import Angels from '../images/angels.png'

const Comment = (props) => {
    return (
        <div className='Comment'>
            <p>{ props.comment }</p>
            <div className='Person'>
                <img src={ props.imageUrl } alt='Person' />
                <div className='PersonData'>
                    <p>{ props.name }</p>
                    <p>{ props.company }</p>
                </div>
            </div>
        </div>
    )
}

const Testimonial = () => {
    return (
        <div className='Testimonials'>
            <div className='TestimonialsText'>
                <span>Testimonials</span>
                <h1>Don't take our word for it.</h1>
                <p>See what our customers are saying.</p>
            </div>
            <div className='Comments'>
                <Comment 
                    comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.'} 
                    imageUrl={Pam}
                    name={'Pam Beesly'}
                    company={'Dunder Mifflin'}
                />
                <Comment 
                    comment={'Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget consequat fringilla.'} 
                    imageUrl={Michael}
                    name={'Michael Scott'}
                    company={'Dunder Mifflin'}
                />
                <Comment 
                    comment={'Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus.'} 
                    imageUrl={Angels}
                    name={'Angels Schrute'}
                    company={'Dunder Mifflin'}
                />
            </div>
        </div>
    )
}

export default Testimonial