import 'bootstrap/dist/css/bootstrap.min.css';
//import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import './card.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap';

//console.log("Hello from Webpack");
//console.log("Hola mundo");

import avatar from './img/deadpool.png';

let root = document.querySelector("#root");
root.innerHTML = "Hola Mundo";

let divCard = document.createElement("div");
divCard.classList.add("card");
divCard.innerHTML = '<div class="card-body">Hola Mundo</div>';
root.appendChild(divCard);
let img = document.createElement('img');
img.src = avatar;
img.style.width = "100px";
img.style.height = "100px";
img.classList.add("rounded-circle");
root.appendChild(img)