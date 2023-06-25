const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  btn.style.left = Math.floor(Math.random() * 500) + "px";
  btn.style.top = Math.floor(Math.random() * 500) + "px";
});

btn.addEventListener("click", () => {
  document.querySelector("h1").style.display = "flex";
  btn.style.display = "none";
});
