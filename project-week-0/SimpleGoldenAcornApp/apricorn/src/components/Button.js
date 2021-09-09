import React from 'react'

export default function Button(props) {
    function clickHandler() {
        
    }


    return (
        <button onClick={clickHandler}>{props.name} {props.action} </button>
    )
}
