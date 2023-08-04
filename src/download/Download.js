import './Download.css'

import AppStore from '../images/app-store.svg'

const Download = () => {
    return (
        <div className='Download'>
            <span>Download</span>
            <h1>It's available right now!</h1>
            <p>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
            <img src={AppStore} alt='AppStore' />
        </div>
    )
}

export default Download