import React from 'react'

function Student (props) {
    return (
        <div>
            <h1>My name is {props.name} and I am a student of {props.university}</h1>
        </div>
    );
}

export default Student