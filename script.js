const userColorBox = document.querySelector(".user-set");
const targetBox = document.querySelector(".target");

let hue = 0;
let sat = 100;

let targetHue = 320;
let targetSat = 100;

targetBox.style.backgroundColor = `hsl(${targetHue}, ${targetSat}%, 60%)`;

function updateUserColor() {
    userColorBox.style.backgroundColor = `hsl(${hue}, ${sat}%, 50%)`;
}

document.getElementById("hue-range").addEventListener("input", e => {
    hue = e.target.value;
    console.log(hue);
    updateUserColor();
});

document.getElementById("sat-range").addEventListener("input", e => {
    sat = e.target.value;
    console.log(sat);
    updateUserColor();
});

