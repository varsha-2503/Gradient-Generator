let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let code = document.querySelector(".code");

let rgb1 = "#5C91E5";
let rgb2 = "#983FC6";

let direction = document.getElementById("direction");
let gradientdirection = "to right";

const gethexcode = () => {
  let hexcodeval = "0123456789abcdef";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexcodeval[Math.floor(Math.random() * 16)];
  }
  return color;
};

const updateGradient = () => {
  let gradient = `linear-gradient(${gradientdirection}, ${rgb1}, ${rgb2})`;
  document.body.style.backgroundImage = gradient;
  code.innerText = `background-image: ${gradient};`;
};

const handlebutton1 = () => {
  rgb1 = gethexcode();
  btn1.innerText = rgb1;
  btn1.style.backgroundColor = rgb1;
  btn1.style.color = "#fff";
  updateGradient();
};

const handlebutton2 = () => {
  rgb2 = gethexcode();
  btn2.innerText = rgb2;
  btn2.style.backgroundColor = rgb2;
  btn2.style.color = "#fff";
  updateGradient();
};

code.addEventListener("click", () => {
  navigator.clipboard.writeText(code.innerText);
  code.innerText = "Copied! ✅";

  setTimeout(() => {
    updateGradient();
  }, 1000);
});

btn1.addEventListener("click", handlebutton1);
btn2.addEventListener("click", handlebutton2);
direction.addEventListener("change", () => {
  gradientdirection = direction.value;
  updateGradient();
});

updateGradient();

btn1.style.backgroundColor = rgb1;
btn2.style.backgroundColor = rgb2;
btn1.style.color = "#fff";
btn2.style.color = "#fff";
