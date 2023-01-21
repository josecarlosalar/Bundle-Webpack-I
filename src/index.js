import logoImg from './content/logo.png';
import "./styles.scss";
//import "./mystyles.scss";

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);