/*
* Functions for block "Knoledge"
*/
const selectSkl = document.getElementById("select-skill");

const optHardSkl = document.getElementById("hard-skl");
const optSoftSkl = document.getElementById("soft-skl");

const softText = document.getElementById("soft-text");
const hardText = document.getElementById("hard-text");

selectSkl.addEventListener("change", function(e) {
    e.preventDefault();

    const optHardSkl = document.getElementById("hard-skl");
    const optSoftSkl = document.getElementById("soft-skl");

    optSoftSkl.addEventListener('click', function(e) {
        e.preventDefault();

        hardText.classList.add("closedText");
        softText.classList.remove("closedText");
    });

    optHardSkl.addEventListener("click", function(e) {
        e.preventDefault();

        softText.classList.add("closedText");
        hardText.classList.remove("closedText");
    });
})

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