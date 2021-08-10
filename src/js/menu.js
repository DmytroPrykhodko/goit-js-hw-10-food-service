import menu from '../menu.json';
import menuTemplate from '../templates/menu.hbs';

 const menuRef = document.querySelector('.js-menu');

const markup = menuTemplate(menu);
 
 menuRef.insertAdjacentHTML('beforeend', markup);