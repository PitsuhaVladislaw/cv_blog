const floorWork = document.getElementById("floor-work");
const textIcon = document.getElementById("text-icon");
const screenImage = document.getElementById("scr-img");

const butClose = document.getElementById("butExpeClose");
const butOpen = document.getElementById("butExpeOpen");
const butOpCheck = document.getElementById("checkOpBut");
const butClCheck = document.getElementById("checkClBut");

butOpen.addEventListener("click", activeIcon);
butClose.addEventListener("click", closedIcon);
butOpCheck.addEventListener("click", usualBlock);
butClCheck.addEventListener("click", dedicateBlock);

function usualBlock(e) {
    e.preventDefault();

    closedIcon(e);

    const changeImage = (elem) => {
        elem.preventDefault();

        screenImage.classList.remove("work-screen-open");
        screenImage.classList.add("work-screen-close");
    }

    setTimeout(function() {
        changeImage(e)
    }, 1500) ;
}

function dedicateBlock(e) {
    e.preventDefault();

    const changeImage = (elem) => {
        elem.preventDefault();

        screenImage.classList.remove("work-screen-close");
        screenImage.classList.add("work-screen-open");
    } 

    setTimeout(function() {
        changeImage(e);
    }, 500);

    setTimeout(function() {
        activeIcon(e);
    }, 1500);
}

function closedIcon(e) {
    e.preventDefault();

    textIcon.classList.remove("text-icon");
    textIcon.style.display = "none";

    setTimeout(function() {
        floorWork.classList.remove("floor-work-open");
        floorWork.classList.toggle("floor-work-closed");
    }, 100)
}

function activeIcon(e) {
    e.preventDefault();

    floorWork.classList.remove("floor-work-closed");
    floorWork.classList.add("floor-work-open");

    setTimeout(function() {
        textIcon.classList.add("text-icon");
        textIcon.style.display = "flex";
    }, 1000)
}