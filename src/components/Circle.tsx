import React from 'react'


export interface propTypes {
    image: string;
};

const Circle = (props: propTypes) => {

    return (
        <div className="circle">
            <img src={require(`../img/${props.image}.svg`)} className="circle-icon" />
        </div>
    )
};

export default Circle;

