import "./styles/reset.css";
import "./styles/index.css";
import arrow from "./assets/images/arrow.png";
import imgLogo from "./assets/images/logo_ntd.svg";
import intra from "./assets/images/intra.png";
import cap from "./assets/images/cap.svg";
import ges from "./assets/images/ges.svg";
import sec from "./assets/images/sec.svg";
import sal from "./assets/images/sal.svg";
import app from "./assets/images/app.svg";
import por from "./assets/images/por.svg";
import aAp from "./assets/images/app-do-aluno.png";
// import checked from "./assets/images/checked.svg";

const addClickSection3 = () => {
  const arrow = [...document.querySelectorAll(".arrow")];
  const h4 = [...document.querySelectorAll(".container_details h4")];
  const containerDetails = [...document.querySelectorAll(".container_details")];
  const headerSection3 = [...document.querySelectorAll(".container_information_sec3_header")];
  const textSection3 =[...document.querySelectorAll(".container_information_sec3_text")];
  const limit = headerSection3.length;
 
    for (let i = 0; i < limit; i++) {
      headerSection3[i].addEventListener('click',()=>{
        arrow[i].classList.toggle('rotate');
        containerDetails[i].classList.toggle('show_text_details');
        textSection3[i].classList.toggle('show_text');
        h4[i].classList.remove('show_text');
      });
      h4[i].addEventListener('click',()=>{
        arrow[i].classList.toggle('rotate');
        containerDetails[i].classList.remove('show_text_details');
        textSection3[i].classList.remove('show_text');
        ;
      });
    }
};
const clickMenuMobile = () => {
  const default_button = document.querySelector("#default_button");
  const input = document.querySelector("#burguer_menu");
  const div = document.querySelector("#burguer_menu_container");
  const menu = document.querySelector("#menu");
  input.addEventListener("click", () => {
    const lessThan552 = window.innerWidth < 552;
    if (lessThan552) {
      menu.classList.toggle("show_menu_small_w");
      div.classList.toggle("translate_button_small_w");
    }
    menu.classList.toggle("show_menu");
    div.classList.toggle("translate_button");
  });
};
const addImg = () => {
  
  const imgAppAluno = document.querySelector("#img_app_aluno");
  const imgsContent3 = document.querySelectorAll("#content3 img");
  const img_intra = document.querySelector("#img_intra");
  const images_effect = document.querySelectorAll(".image_effect");
  const burguer_menu_container = document.querySelector(
    "#container_img_menu_mobile"
  );
  imgAppAluno.setAttribute("src", `${aAp}`);
  const imgs = [cap, ges, sec, sal, app, por];
  imgsContent3.forEach((img, i) => {
    img.setAttribute("src", `${imgs[i]}`);
  });
  img_intra.setAttribute("src", `${intra}`);
  const img_container = document.querySelector(".ele_img");
  images_effect.forEach((ele) => ele.setAttribute("src", `${arrow}`));
  burguer_menu_container.setAttribute("src", `${imgLogo}`);
  img_container.setAttribute("src", `${imgLogo}`);
};

document.addEventListener("DOMContentLoaded", () => {
  addImg();
  clickMenuMobile();
  addClickSection3();
});
