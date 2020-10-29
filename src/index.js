import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import './card.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import { Home } from './home.jsx';

//console.log("Hello from Webpack");
//console.log("Hola mundo");

ReactDOM.render(<Home show={true} />, document.querySelector("#root"));