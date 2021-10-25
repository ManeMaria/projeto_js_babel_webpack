import "./styles/reset.css";
import "./styles/index.css";
import arrow from "./assets/images/arrow.png";
import imgLogo from "./assets/images/logo_ntd.svg";

const clickMenuMobile = () => {
  const default_button = document.querySelector("#default_button");
  const input = document.querySelector("#burguer_menu");
  const button = document.querySelector("#burguer_menu_container");
  const menu = document.querySelector("#menu");
  input.addEventListener("click", () => {
    
    menu.classList.toggle("show_menu");
    button.classList.toggle("translate_button");
  });
};
const addImg = () => {
  const images_effect = document.querySelectorAll(".image_effect");
  const burguer_menu_container = document.querySelector(
    "#container_img_menu_mobile"
  );
  const img_container = document.querySelector(".ele_img");
  images_effect.forEach((ele) => ele.setAttribute("src", `${arrow}`));
  burguer_menu_container.setAttribute("src", `${imgLogo}`);
  img_container.setAttribute("src", `${imgLogo}`);
};

document.addEventListener("DOMContentLoaded", () => {
  clickMenuMobile();
  addImg();
});
