const userColorBox = document.querySelector(".user-set");
const targetBox = document.querySelector(".target");

let hue = 0;
let sat = 100;

// --- RANDOM TARGET COLOR ---
let targetHue = 320
let targetSat = 100

targetBox.style.backgroundColor = `hsl(${targetHue}, ${targetSat}%, 60%)`;

// --- SLIDER LOGIC ---
function handleSlider(slider, callback, fillClass) {
    slider.addEventListener("click", (e) => {
        const rect = slider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = (x / rect.width) * 100;

        slider.querySelector("." + fillClass).style.width = percent + "%";

        callback(percent);
        updateUserColor();
    });
}

// update user color box
function updateUserColor() {
    userColorBox.style.backgroundColor = `hsl(${hue}, ${sat}%, 50%)`;
}

// hook sliders
handleSlider(document.getElementById("hue-slider"), 
    pct => {
        hue = (pct / 100) * 360;
        updateSatSliderGradient();
    },
    "hue-fill"
);

function updateSatSliderGradient() {
    const satSliderBG = document.querySelector("#sat-slider .slider-bg");
    satSliderBG.style.background = `
        linear-gradient(to right,
            hsl(${hue}, 0%, 50%),
            hsl(${hue}, 100%, 50%)
        )
    `;
}

updateSatSliderGradient();



handleSlider(document.getElementById("sat-slider"), 
    pct => sat = pct,
    "sat-fill"
);
