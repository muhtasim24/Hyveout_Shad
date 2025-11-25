const userColorBox = document.querySelector(".user-set");
const targetBox = document.querySelector(".target");
const videoDiv = document.getElementById('video');
const endVideo = document.getElementById('endVideo');
let audioStarted = false;

const playButton = document.getElementById("play");
const startScreen = document.querySelector(".startScreen");
const container = document.getElementById("container");
const music = document.getElementById("music");

const footer = document.getElementById('footerText');

playButton.addEventListener("click", () => {
    // Show game
    startScreen.style.display = "none";
    container.style.display = "flex";

    music.play();
});

let hue = 0;
let sat = 0;

let targetHue = 320;
let targetSat = 100;




targetBox.style.backgroundColor = `hsl(${targetHue}, ${targetSat}%, 60%)`;

function startAudio() {
    if (!audioStarted) {
        music.play();
        audioStarted = true;
    }
}

function updateUserColor() {
    userColorBox.style.backgroundColor = `hsl(${hue}, ${sat}%, 50%)`;
}

// --- MATCH CHECK ---
function colorsAreClose(h1, s1, h2, s2) {
    const hueDiff = Math.abs(h1 - h2);
    const satDiff = Math.abs(s1 - s2);

    return hueDiff < 10 && satDiff < 10;
}


// --- SLIDERS ---
document.getElementById("hue-range").addEventListener("input", e => {
    hue = e.target.value;
    updateUserColor();
    updateSatGradient(hue);
    if (colorsAreClose(hue, sat, targetHue, targetSat)) {
        console.log('playing');
        videoDiv.style.display = "flex";
        container.style.display = "none";
        videoDiv.style.backgroundColor = "black";
        footer.style.display = "none";
        endVideo.play();

        // endVideo.onended = () => {
        //     window.location.href = "https://underdogs.ooo/a/gempages?version=v7&shop_id=589225404988916242&theme_page_id=594726190963491762&page_type=GP_PRODUCT";
        // };
    }
});

document.getElementById("sat-range").addEventListener("input", e => {
    sat = e.target.value;
    updateUserColor();
    if (colorsAreClose(hue, sat, targetHue, targetSat)) {
        console.log('playing');
        footer.style.display = "none";
        videoDiv.style.display = "block";
        endVideo.play();

        // endVideo.onended = () => {
        //     window.location.href = "https://underdogs.ooo/a/gempages?version=v7&shop_id=589225404988916242&theme_page_id=594726190963491762&page_type=GP_PRODUCT";
        // };
    }
});

// --- SATURATION GRADIENT ---
const satRange = document.getElementById("sat-range");

function updateSatGradient(hue) {
    satRange.style.background = `
        linear-gradient(to right,
            hsl(${hue}, 0%, 50%),
            hsl(${hue}, 100%, 50%)
        )
    `;
}