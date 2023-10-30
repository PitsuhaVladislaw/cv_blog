const floorWork = document.getElementById("floor-work");
const textIcon = document.getElementById("text-icon");
const screenImage = document.getElementById("scr-img");
const workSecond = document.querySelector(".work-screen");

const butClose = document.getElementById("butExpeClose");
const butOpen = document.getElementById("butExpeOpen");
const butOpCheck = document.getElementById("checkOpBut");
const butClCheck = document.getElementById("checkClBut");

butOpen.addEventListener("click", activeIcon);
butClose.addEventListener("click", closedIcon);

function activeIcon(e) {
    e.prefentDefault();

    () => {
        screenImage
    }
}

function closedIcon(e) {
    e.prefentDefault();
}