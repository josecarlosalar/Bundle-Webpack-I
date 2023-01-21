import logoImg from './content/logo.png';
import "./styles.scss";

let texto: string = "¡ Hello World !";
const txt = document.getElementById('txtContainer');
txt.innerHTML += texto;


const img = document.createElement('img');
img.src = logoImg;
document.getElementById('imgContainer').appendChild(img);