import _ from 'lodash';
import '../css/style.css';

function contact() {
    const arr = ['Email: rrindrajosia@gmail.com', 'Address: 60 Creekside Lane Avila', 'Phone: +53 345 7'];
    const full = document.createElement('div');
    full.classList.add('full', 'contact-image');
    const container = document.createElement('div');
    container.classList.add('container');
    const title = document.createElement('h2');
    title.innerHTML = 'Get In Touch';
    const ul = document.createElement('ul');
    for (let i = 0; i <= arr.length - 1; i++) {
       let li = document.createElement('li');
       li.innerHTML = arr[i];
       ul.appendChild(li);
   }
   const href = document.createElement('a');
   href.setAttribute('href', '#');
   href.classList.add('myButton');
   href.innerHTML = `Contact page`;


    container.appendChild(title);
    container.appendChild(ul);
    container.appendChild(href);
    full.appendChild(container);

  return full;
}

export default contact;
