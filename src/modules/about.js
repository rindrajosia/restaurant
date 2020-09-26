import _ from 'lodash';// eslint-disable-line no-unused-vars
import '../css/style.css';

const about = () => {
  const full = document.createElement('div');
  full.classList.add('full', 'about-image');
  const container = document.createElement('div');
  container.classList.add('container');
  const title = document.createElement('h2');
  title.innerHTML = 'Who we are and what we do?';
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
  href.innerHTML = 'About Page';
  container.appendChild(href);
  full.appendChild(container);
  return full;
};

export default about;
