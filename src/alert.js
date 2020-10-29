import React from 'react';

const Alert = (props) => {
    return (
        <>
            <div className={"alert alert-danger " + (props.show ? "d-block" : "d-none")} role="alert">
                <h4>{props.text}</h4>
            </div>
            <ul>
                {
                    props.names.length > 0 &&
                    props.names.map((name, index) => {
                        return <li key={index}>{name}</li>
                    })
                }
            </ul>
        </>
    )
}

export default Alert;