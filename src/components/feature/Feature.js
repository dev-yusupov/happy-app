import React from "react"
import './Feature.css'


const Feature = (props) => {

    return (
        <div className="Feature-item">
            <div>
                <img src={props.image} alt="This is pohoto" className="Feature-item-img" />
            </div>
            <div className="Feature-item-data">
                <h3 style={{ color: props.titleColor }}>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Feature