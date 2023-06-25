const handBurger = document.querySelector(".hand-burger");

function toggle(e) {
  e.target.classList.toggle("click");
}

handBurger.addEventListener("click", toggle);
