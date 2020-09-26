import _ from 'lodash'; // eslint-disable-line no-unused-vars
import home from './modules/home';
import menu from './modules/menu';
import about from './modules/about';
import contact from './modules/contact';
import initial from './modules/initial';

initial();

function mainPage(page) {
  const main = document.querySelector('main');
  main.innerHTML = '';
  switch (page) {
    case 'Home':
      main.appendChild(home());
      break;
    case 'Menu':
      main.appendChild(menu());
      break;
    case 'About':
      main.appendChild(about());
      break;
    case 'Contact':
      main.appendChild(contact());
      break;
    default:
      break;
  }
}

const tab = document.querySelector('.tab');
const li = tab.getElementsByTagName('li');
for (let i = 0; i < li.length; i += 1) {
  li[i].addEventListener('click', mainPage.bind(li[i], li[i].innerHTML));
}
