let hueFill = document.querySelector(".hue-fill");
let satFill = document.querySelector(".sat-fill");

let userBox = document.querySelector(".user-set");
let targetBox = document.querySelector(".target");

// TARGET COLOR
let targetHue = 330;
let targetSat = 70;
let targetLight = 60;

targetBox.style.background = `hsl(${targetHue}, ${targetSat}%, ${targetLight}%)`;

// USER VALUES
let hue = 0;
let sat = 50;
let light = 60;

// ----- HUE SLIDER -----
document.querySelector(".color-control").addEventListener("click", e => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;

    hue = Math.floor(percentage * 360);
    hueFill.style.width = `${percentage * 100}%`;

    updateUserColor();
});

// ----- SAT SLIDER -----
document.querySelector(".sat-control").addEventListener("click", e => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;

    sat = Math.floor(percentage * 100);
    satFill.style.width = `${percentage * 100}%`;

    updateUserColor();
});

// UPDATE COLOR
function updateUserColor() {
    userBox.style.background = `hsl(${hue}, ${sat}%, ${light}%)`;
}
