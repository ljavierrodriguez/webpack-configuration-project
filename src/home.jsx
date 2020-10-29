import React from 'react';
import Alert from './alert';

export const Home = (props) => {
    let names = ["Maria", "Ana", "Pedro", "Miguel", "Moises", "Juan", "Daniel"];
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Alert text="Este es mi Alert" show={true} names={names} />
                </div>
            </div>
            {
                props.show ?
                    (
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Hola desde React</h1>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Mostrando Contenido Oculto</h1>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}