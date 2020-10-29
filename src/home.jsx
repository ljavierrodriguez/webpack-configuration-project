import React from 'react';
import Alert from './alert';

export const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Alert text="Este es mi Alert" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>Hola desde React</h1>
                </div>
            </div>
        </div>
    )
}