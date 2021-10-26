import "./styles/reset.css";
import "./styles/index.css";
import arrow from "./assets/images/arrow.png";
import imgLogo from "./assets/images/logo_ntd.svg";
import intra from "./assets/images/intra.png";

const clickMenuMobile = () => {
  const default_button = document.querySelector("#default_button");
  const input = document.querySelector("#burguer_menu");
  const div = document.querySelector("#burguer_menu_container");
  const menu = document.querySelector("#menu");
  input.addEventListener("click", () => {
    const lessThan552 = window.innerWidth < 552;
    if(lessThan552){
      menu.classList.toggle("show_menu_small_w");
      div.classList.toggle("translate_button_small_w");
    }
    menu.classList.toggle("show_menu");
    div.classList.toggle("translate_button");
  });
};
const addImg = () => {
  const img_intra = document.querySelector("#img_intra");
  const images_effect = document.querySelectorAll(".image_effect");
  const burguer_menu_container = document.querySelector(
    "#container_img_menu_mobile"
  );
  img_intra.setAttribute("src", `${intra}`);
  const img_container = document.querySelector(".ele_img");
  images_effect.forEach((ele) => ele.setAttribute("src", `${arrow}`));
  burguer_menu_container.setAttribute("src", `${imgLogo}`);
  img_container.setAttribute("src", `${imgLogo}`);
};

document.addEventListener("DOMContentLoaded", () => {
  clickMenuMobile();
  addImg();
});
