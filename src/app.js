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