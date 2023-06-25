const btn = document.getElementById("btn");
const value = document.getElementById("value");

// Method
const pickColor = async () => {
  const eyeDropper = new EyeDropper();
  const { sRGBHex } = await eyeDropper.open();
  value.innerHTML = sRGBHex;
  value.style.background = sRGBHex;
  value.style.color = "white";
};

btn.addEventListener("click", pickColor);
