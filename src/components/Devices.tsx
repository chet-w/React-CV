import React from 'react';

interface PropTypes { 
    data: {
        name: string,
        key: string,
        details: string[],
        dir: string,
        size: number,
        laptop: number,
        mobile: number
    };
}

const Devices = (props: PropTypes) => {
    return (
        <div className="devices-container">
            <div className="laptop">
                <img className="screen" src={
                    require(`../img/projects/${props.data.key}/${props.data.key}${props.data.laptop}.png`)
                } />
                <img className="skin" src={require("../img/macbook4.png")} />
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
