import _ from 'lodash';
import '../css/style.css';

function home() {
    const main = document.createElement('main');
    const full = document.createElement('div');
    full.classList.add('full', 'home-image');
    const container = document.createElement('div');
    container.classList.add('container');
    const title = document.createElement('h2');
    title.innerHTML = 'Delicious Homemade Burger';
    container.appendChild(title);
    const p = document.createElement('p');
    p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum nec varius dui. Suspendisse potenti.
      Vestibulum ac pellentesque tortor.
      Aenean congue sed metus in iaculis. Cras a tortor enim.`;
    container.appendChild(p);
    const href = document.createElement('a');
    href.setAttribute('href', '#');
    href.classList.add('myButton');
    href.innerHTML = `Home Page`;
    container.appendChild(href);

    full.appendChild(container);
    main.appendChild(full);

  return main;
}

export default home;
