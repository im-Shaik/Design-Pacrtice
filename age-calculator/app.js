// declare
const birthdayDate = document.getElementById("birthday");
const btn = document.querySelector(".btn");
const value = document.querySelector(".value h3");

calculateAge = () => {
  // today
  const today = new Date();
  // birthday
  const birthday = new Date(birthdayDate.value);

  // calculate
  const ageMilliSeconds = today - birthday;
  const ageYears = Math.floor(ageMilliSeconds / (1000 * 60 * 60 * 24 * 365.25));

  // display
  value.innerHTML = `You are ${ageYears}'s old!.....`;
};

btn.addEventListener("click", calculateAge);
