/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


  const createMenu = menuItems => {
    const menu = document.createElement('div');
    const ul = document.createElement('ul');
  
    menuItems.forEach(el => {
      let item = document.createElement('li');
      item.textContent = el;
      ul.appendChild(item);
    });
  
    menu.classList.add('menu');
  
    menu.appendChild(ul);
  
    const menuBtn = document.querySelector('.menu-button');
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('menu--open');
    });
  
    return menu;
  };
  
  const header = document.querySelector('.header');
  
  header.prepend(createMenu(menuItems));