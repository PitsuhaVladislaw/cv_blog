const contMenu = document.getElementById("cont-menu");

const btnSoftSkl = document.getElementById("soft-skl");
const btnHardSkl = document.getElementById("hard-skl");

const textSkill = document.getElementById("skill-text");

const softText = document.getElementById("soft-text");
const hardText = document.getElementById("hard-text")

function clickButton() {
    hardText.addEventListener('click', () => {
        softText.classList.add("close-text");
    })
}

clickButton()