import React, { Component } from 'react';
import Circle from "./Circle";

interface PropTypes {
    image: string;
    text: string;
}

const ProfileItem = (props: PropTypes) => {
    return (
        <div className="profile-item">
            <Circle image={props.image} />
            <div className="text">
                {props.text}
            </div>
        </div>
    )
}

export default ProfileItem;
