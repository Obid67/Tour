const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classlist.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classlist.toggle('bx-x')
	navbar.classlist.toggle('open')
};
window.onscroll = () => {
	menu.classlist.remove('bx-x')
	navbar.classlist.remove('open')
}; 