let searchBtn = document.querySelector("#search");
let searchBar = document.querySelector(".search-bar-container");

let loginBtn = document.getElementById("login");
let closeBtn = document.getElementById("close");
let loginForm = document.querySelector("#login-container");

let menuBtn = document.getElementById("menu");
let navbar = document.querySelector(".navbar");

let videoBtn = document.querySelectorAll(".vid-btn");
// let videoContainer=document.querySelectorAll('.video-container');

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("recovery");
};

searchBtn.addEventListener("click", function () {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("recovery");
});

loginBtn.addEventListener("click", function () {
  loginForm.classList.add("recovery");
});
closeBtn.addEventListener("click", function () {
  loginForm.classList.remove("recovery");
});

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("recovery");
});
videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");

    document.querySelector("#video-slider").src = src;
  });
});
// slider k liy adjustments
var swiper = new Swiper(".reveiw-slider", {
  spaceBetween: 20,
  loop: true,
  // automatic loop chalany k liy
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // js me breakpoints esy likhty h
  // commas ko dhehan me rakhna
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  // automatic loop chalany k liy
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // js me breakpoints esy likhty h
  // commas ko dhehan me rakhna
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
