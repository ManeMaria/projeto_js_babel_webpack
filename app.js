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
import cc from "./assets/images/img_cc.png";
import i_gm from "./assets/icons/i_gm.svg";
import i_lo from "./assets/icons/i_lo.svg";
import i_ph from "./assets/icons/i_ph.svg";
import i_ws from "./assets/icons/i_ws.svg";

const inputMenuBurguerMobile = document.querySelector("#burguer_menu");
const getYear = () => {
  const year = new Date().getFullYear();
  const span = document.querySelector("#date");
  span.textContent = year;
};

const setCount = (limit, id, time) => {
  let acum = 1;
  let func;

  return () => {
    func = setInterval(() => {
      if (acum === limit) {
        clearInterval(func);
      }

      document.querySelector(`#${id}`).innerHTML = acum;
      acum++;
    }, time || 1);
  };
};

let ticket = false;
window.addEventListener("scroll", function () {
  const containerCount = document.querySelector("#container_counts");
  const top = containerCount.getBoundingClientRect().y.toFixed(0);

  if (top >= 0 && top <= window.innerHeight) {
    if (ticket) {
      return;
    }
    const countrSchools = setCount(100, "countStudents", 3);
    const count10years = setCount(900, "count10years");
    const countStudents = setCount(200, "countrSchools", 2);
    countrSchools();
    count10years();
    countStudents();
    ticket = true;
  }
});

const addClickSection3 = () => {
  const arrow = [...document.querySelectorAll(".arrow")];
  const h4 = [...document.querySelectorAll(".container_details h4")];
  const containerDetails = [...document.querySelectorAll(".container_details")];
  const headerSection3 = [
    ...document.querySelectorAll(".container_information_sec3_header"),
  ];
  const textSection3 = [
    ...document.querySelectorAll(".container_information_sec3_text"),
  ];
  const limit = headerSection3.length;

  for (let i = 0; i < limit; i++) {
    headerSection3[i].addEventListener("click", () => {
      arrow[i].classList.toggle("rotate");
      containerDetails[i].classList.toggle("show_text_details");
      textSection3[i].classList.toggle("show_text");
      h4[i].classList.remove("show_text");
    });
    h4[i].addEventListener("click", () => {
      arrow[i].classList.toggle("rotate");
      containerDetails[i].classList.remove("show_text_details");
      textSection3[i].classList.remove("show_text");
    });
  }
};
const clickCloseMenuMobile = () => {
  const navigationMenu = document.querySelectorAll("#navigation_menu a");
  for (const ele of navigationMenu) {
    ele.addEventListener("click", () => {
      inputMenuBurguerMobile.click();
    });
  }
};

const clickMenuMobile = () => {
  const burguerMenuContainer = document.querySelector(
    "#burguer_menu_container"
  );
  const menu = document.querySelector("#menu");

  inputMenuBurguerMobile.addEventListener("click", () => {
    const lessThan552 = window.innerWidth < 552;
    if (lessThan552) {
      menu.classList.toggle("show_menu_small_w");
      burguerMenuContainer.classList.toggle("translate_button_small_w");
    }
    menu.classList.toggle("show_menu");
    burguerMenuContainer.classList.toggle("translate_button");
  });
};

const addImg = () => {
  const iconsFooterPag1 = document.querySelectorAll(".icons_footer_pag1");
  const imgCallCenter = document.querySelector("#img_call_center");
  const imgAppAluno = document.querySelector("#img_app_aluno");
  const imgsContent3 = document.querySelectorAll("#content3 img");
  const img_intra = document.querySelector("#img_intra");
  const images_effect = document.querySelectorAll(".image_effect");
  const burguer_menu_container = document.querySelector(
    "#container_img_menu_mobile"
  );
  const imgsFoP1 = [i_gm, i_ws, i_ph, i_lo];
  iconsFooterPag1.forEach((ele, i) =>
    ele.setAttribute("src", `${imgsFoP1[i]}`)
  );
  imgCallCenter.setAttribute("src", `${cc}`);
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
  clickCloseMenuMobile();
  getYear();
  addImg();
  clickMenuMobile();
  addClickSection3();
});
