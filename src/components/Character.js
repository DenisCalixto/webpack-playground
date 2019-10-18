import React from 'react';
import './Character.css';

let Character = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Race: {props.race}</p>
            <p>Status: {props.status}</p>
            <p className={props.comment ? 'visible' : 'hidden'}>Comment: {props.comment}</p>
        </div>
    )
}

export default Character;