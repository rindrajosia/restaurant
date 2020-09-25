import _ from 'lodash';// eslint-disable-line no-unused-vars
import '../css/style.css';
import Logo from '../assets/img/logo.png';

function footer() {
  const footer = document.createElement('footer');
  const logo = document.createElement('div');
  logo.classList.add('logo');
  const imgLogo = new Image();
  imgLogo.src = Logo;
  logo.appendChild(imgLogo);
  const p = document.createElement('p');
  p.innerHTML = `Copyright ©2020 All rights reserved | Made by Josia`;
  footer.appendChild(logo);
  footer.appendChild(p);
  return footer;
}

export default footer;
