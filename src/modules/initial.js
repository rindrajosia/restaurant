import _ from 'lodash';// eslint-disable-line no-unused-vars
import header from './header';
import home from './home';
import footer from './footer';

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
