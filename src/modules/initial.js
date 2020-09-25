import _ from 'lodash';
import header from './header.js';
import home from './home.js';
import footer from './footer.js';

function initial() {
  let content = document.getElementById('content')
  content.appendChild(header());
  content.appendChild(home());
  content.appendChild(footer());
  return content;
}
export default initial;
