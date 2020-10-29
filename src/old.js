/* import avatar from './img/deadpool.png';
import avatar2 from './img/lilith.jpg';

let root = document.querySelector("#root");
root.innerHTML = "Hola Mundo";

let divCard = document.createElement("div");
divCard.classList.add("card");
divCard.innerHTML = '<div class="card-body">Hola Mundo</div>';
root.appendChild(divCard);

for (let i = 0; i < 3; i++) {
    let img = document.createElement('img');
    img.src = avatar;
    img.style.width = "100px";
    img.style.height = "100px";
    img.classList.add("rounded-circle");
    root.appendChild(img)
}

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
btn.classList.add("btn");
btn.classList.add("btn-primary");
btn.addEventListener("click", () => {
    console.log(document.querySelectorAll("img"));
    document.querySelectorAll("img").forEach((item, index) => (index % 2 == 0 ? item.src = avatar2 : avatar));
});

root.appendChild(btn);

let a = "";
let b = 33;
let c = false;
let d = null;
let e = undefined;
let f = {
    a: "",
    b: 33,
    c: false,
    d: null,
    e: undefined,
    f: {
        a: 1,
    }
}

let g = [
    {
        a: 1,
    },
    {
        a: 2,
    },
    {
        a: 3,
    },
    {
        a: 4,
    }
];

let [a1, b1, c1, d1] = g;
console.log(a1.a);

let [...rest] = [1, 2, {a: 1}];
console.log(rest); */