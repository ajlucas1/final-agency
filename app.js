const nav = document.querySelector(".header");
const topOfNav = nav.offsetTop;
const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav");
hamburger.addEventListener("click", function (e) {
  navUl.classList.toggle("show");
});

function fixNav() {
  if (window.scrollY > 420) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);

const swiper = new Swiper(".swiper-container", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
