const cardNumber = document.querySelector(".card-number");
const cardHolder = document.querySelector(".card-holder");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const cvv = document.querySelector(".cvv");
const form = document.querySelector(".card-form");

// card number
cardNumber.oninput = () => {
  document.querySelector(".card-number-text").innerHTML = cardNumber.value;
};

// card holder
cardHolder.oninput = () => {
  document.querySelector(".card-holder-text").innerHTML = cardHolder.value;
};

// card month
monthInput.oninput = () => {
  document.querySelector(".month-text").innerHTML = monthInput.value;
};

// card year
yearInput.oninput = () => {
  document.querySelector(".year-text").innerHTML = yearInput.value;
};

// cvv
cvv.onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};
cvv.onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

cvv.oninput = () => {
  document.querySelector(".cvv-text").innerHTML = cvv.value;
};

// form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Successfully Generated");
  location.reload();
});
