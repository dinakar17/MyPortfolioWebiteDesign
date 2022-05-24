window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  let windowPosition = window.scrollY > 50;
  header.classList.toggle("scrolling-active", windowPosition);
});

let toggleBtn = document.querySelector(".bars");
let overlay = document.querySelector(".overlay");

toggleBtn.addEventListener("click", function () {
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", function () {
  overlay.classList.remove("active");
});
