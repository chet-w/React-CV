import React from 'react'

const Devices = props => {
    return (
        <div className="devices-container">
            <div className="laptop">
                <img className="screen" src={
                    require(`../img/projects/${props.data.key}/${props.data.key}${props.data.laptop}.png`)
                } />
                <img className="skin" src={require("../img/macbook3.png")} />
            </div>
            <div className="mobile">
                <img className="screen" src={
                    require(`../img/projects/${props.data.key}/${props.data.key}${props.data.mobile}.png`)
                } />
                <img className="skin" src={require("../img/phone.png")} />
            </div>
        </div>
    )
}

export default Devices
