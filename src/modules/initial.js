import _ from 'lodash';
import header from './header.js';
import home from './home.js';
import footer from './footer.js';

function initial() {
  let content = document.getElementById('content');
  const main = document.createElement('main');
  content.appendChild(header());
  main.appendChild(home());
  content.appendChild(main);
  content.appendChild(footer());
  return content;
}
export default initial;
