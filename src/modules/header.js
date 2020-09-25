import _ from 'lodash';
import '../css/style.css';
import Logo from '../assets/img/logo.png';

function header() {
    const arr = ['Home', 'Menu', 'About', 'Contact'];
    const header = document.createElement('header');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const imgLogo = new Image();
    imgLogo.src = Logo;
    logo.appendChild(imgLogo);

    const menu = document.createElement('div');
    const ul = document.createElement('ul');
    ul.classList.add('tab');
    for (let i = 0; i <= arr.length - 1; i++) {
       let li = document.createElement('li');
       li.innerHTML = arr[i];
       ul.appendChild(li);
   }
   menu.appendChild(ul);
   header.appendChild(logo);
   header.appendChild(menu);
  return header;
}

export default header;
