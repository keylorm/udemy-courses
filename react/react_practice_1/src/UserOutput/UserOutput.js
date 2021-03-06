import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <h1 onClick={props.click}>{props.username}</h1>
            <p>{props.p1}</p>
            <p>{props.p2}</p>
        </div>
    );
}

export default useroutput;