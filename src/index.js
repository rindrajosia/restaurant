import _ from 'lodash';
import header from './modules/header.js';
import home from './modules/home.js';
import menu from './modules/menu.js';
import about from './modules/about.js';
import contact from './modules/contact.js';
import footer from './modules/footer.js';
import initial from './modules/initial.js';

initial();

const tab = document.querySelector('.tab');
const li = tab.getElementsByTagName('li');
for(let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', mainPage.bind(li[i], li[i].innerHTML));
}

function mainPage(page) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  switch (page) {
    case "Home":
      main.appendChild(home());
      break;
    case "Menu":
      main.appendChild(menu());
      break;
    case "About":
      main.appendChild(about());
      break;
    case "Contact":
      main.appendChild(contact());
      break;
  }
}
