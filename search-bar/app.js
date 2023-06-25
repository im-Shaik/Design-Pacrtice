const box = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".search");
const closeBtn = document.querySelector(".close");

searchBtn.addEventListener("mouseover", function () {
  box.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  box.classList.remove("active");
});
