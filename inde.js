const newLogo = document.querySelector(".logo-plus");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".bx-menu");

const onClick = () => {
  logo.classList.toggle("logo-plus");
  console.log(logo.classList);
  logo.classList.toggle("logo");
  navbar.classList.toggle("navbar-plus");
  menu.classList.toggle("bx-x");
};

const onClick2 = () => {};
