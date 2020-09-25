import _ from 'lodash';// eslint-disable-line no-unused-vars
import '../css/style.css';

function menu() {
  const arr = ['Chicken Bulgogi', 'Karri Rice', 'Tomato Soup', 'Fish Pasta'];
  const full = document.createElement('div');
  full.classList.add('full', 'recipe-image');
  const container = document.createElement('div');
  container.classList.add('container');
  const title = document.createElement('h2');
  title.innerHTML = 'Main Dishes';
  const ul = document.createElement('ul');
  for (let i = 0; i <= arr.length - 1; i += 1) {
    let li = document.createElement('li');
    li.innerHTML = arr[i];
    ul.appendChild(li);
  }
  const href = document.createElement('a');
  href.setAttribute('href', '#');
  href.classList.add('myButton');
  href.innerHTML = 'Menu page';
  container.appendChild(title);
  container.appendChild(ul);
  container.appendChild(href);
  full.appendChild(container);
  return full;
}

export default menu;
