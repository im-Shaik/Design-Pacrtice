// Variable
const docTitle = document.title;
const like = document.querySelector(".like");
const i = document.querySelector("i");

// Action
window.addEventListener("blur", function () {
  document.title = "Come back ^_^";
});

// Re-action
window.addEventListener("focus", function () {
  document.title = docTitle;
});

// Like action
like.addEventListener("click", (e) => {
  e.preventDefault();
  i.style.color = "red";
  const num = Number(document.querySelector("#value").textContent);
  const newNum = num + 1;
  document.querySelector("#value").textContent = newNum;
});
