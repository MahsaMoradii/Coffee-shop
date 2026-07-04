let menu = document.getElementById("menu-icon");
let nav_list = document.querySelector(".nav-list");
let close_button = document.getElementById("menu-close-button");
let header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
  if(window.scrollY > 250){
    header.classList.add("hello")
  }else{
    header.classList.remove("hello")
  }
})

menu.onclick =()=>{
    menu.classList.toggle("bx-x");
    nav_list.classList.toggle("open");
}
close_button.addEventListener("click", ()=> menu.click());

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor :true,
  spaceBetween :25, 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable :true,
    dynamicBullets :true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 breakpoints: {
  0:{
    slidesPerView:1
  },
  768:{
    slidesPerView: 2
  },
  1024:{
    slidesPerView: 3
  }
 }
});