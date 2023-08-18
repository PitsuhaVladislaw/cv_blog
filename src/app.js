/*
* Functions for block "Knoledge"
*/
let listOfSkill = document.getElementById("skills");

const listHard = [
    "HTML", "CSS", "JS",
    "TS", "React", "Redux",
    "Figma", "Bootstrap", "SCSS",
    "Git", "GitHub"
];

const listSoft = [
    "I am ready to work hard and learn new things for myself, experience in practice is much better than in a simple studied theory.", 
    "I read new material with great interest and work it out in every possible way in my own projects or in assignments that I find on the Internet.",
    "I am hardworking, interested, responsible, calmly approach the work and do it carefully."
];

function changeSkill() {
    let i = listOfSkill.selectedIndex;
    let text = document.querySelector("#skill-text p")

    if (listOfSkill.options[i].value === "Hard") {
        text.innerHTML = "";
        text.innerHTML = listHard.join(', ');

    } else if (listOfSkill.options[i].value === "Soft") {
        text.innerHTML = "";
        text.innerHTML = listSoft.join(' ');
    }
}

//* Nav-menu

const navMenu = document.getElementById("nav-menu");
const btnMenu = document.querySelectorAll(".nav-menu button");
const clBtn = document.querySelector("#cl-btn");

function openMenu(e) {
    e.preventDefault();

    navMenu.style.animationName = "openMenu";
    navMenu.style.animationDuration = "1.0s";
    navMenu.style.width = "480px";

    setTimeout(() => {
        for(let btn of btnMenu) {
            btn.style.display = "";
        }
    }, 500);
}

function closeMenu(e) {
    e.preventDefault();

    for(let btn of btnMenu) {
        btn.style.display = "none";
    }

    setTimeout(() => {
        navMenu.style.animationName = "closeMenu";
        navMenu.style.animationDuration = "1.0s";
        navMenu.style.width = "100px";
    }, 500);
}

btnMenu.forEach(btn => btn.addEventListener("click", closeMenu));
clBtn.addEventListener("click", openMenu);

//* For buttons of nav-menu

function linkParagraf(url) {
    window.location.href = "#" + url;
}

//*for guests

window.addEventListener("load", alert("Site's not ready! Sorry for the inconvenience."));


//*for nav-links

const navLinks = document.querySelector('#nav-links');
const btnNav1 = document.querySelector('#nav-btn1');
const btnNav2 = document.querySelector('#nav-btn2');

let aLinks = document.querySelectorAll('#nav-links a');

btnNav1.addEventListener('click', openNavMenu);
btnNav2.addEventListener('click', closeNavMenu);

function openNavMenu(e) {
    e.preventDefault();

    navLinks.style.display = "";
    btnNav1.style.display = "none";
    btnNav2.style.display = "";
}

function closeNavMenu(e) {
    e.preventDefault();

    navLinks.style.display = "none";
    btnNav2.style.display = "none";
    btnNav1.style.display = "";
}