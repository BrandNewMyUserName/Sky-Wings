// script.js
const toggleNavigation = document.getElementById('toggle-navigation');
const navigationMenu = document.getElementById('navigation-menu');

toggleNavigation.addEventListener('click', () => {
    navigationMenu.style.display = navigationMenu.style.display === 'flex' ? 'none' : 'flex';
});

navigationMenu.addEventListener('click', () => {
    navigationMenu.style.display = 'none';
});
