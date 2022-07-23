// Import stylesheets
import './style.css';

// Write Javascript code!
window.onscroll = function () {
  myFunction();
};

// Get the navbar
let navbar = document.querySelector('header');

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
  if (window.pageYOffset <= sticky) {
    navbar.classList.remove('sticky');
  }
}
const menu = document.querySelector('ul');
const menuItem = document.querySelectorAll('li');
let allInputs = document.getElementsByTagName('input');
menuItem.forEach((el) => {
  el.addEventListener('click', () => {
    menu.style.position = 'inherit';
    for (let i = 0, max = allInputs.length; i < max; i++) {
      if (allInputs[i].type === 'checkbox') allInputs[i].checked = false;
    }
  });
});
