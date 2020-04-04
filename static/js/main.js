var oBlink = false;
var oSpan = document.getElementById("title-o")
var aboutTitle = document.getElementById("about-title")
var int = setInterval(blink, 1000);
var aboutList = document.getElementById("about");
var projectList = document.getElementById("projects")
var projectsTitle = document.getElementById("projects-title")


function aboutClick() {
    aboutList.hidden = !aboutList.hidden;
    if(aboutTitle.innerHTML[0] == "+") {
        aboutTitle.innerHTML = "- Minusta"
    } else {
        aboutTitle.innerHTML = "+ Minusta"
    }
}

function projectsClick() {
    projectList.hidden = !projectList.hidden;
    if(projectsTitle.innerHTML[0] == "+") {
        projectsTitle.innerHTML = "- Projektini"
    } else {
        projectsTitle.innerHTML = "+ Projektini"
    }
}

function blink() {
    if(!oBlink) {
        oSpan.classList.remove("about-me-title-o-js");
        oBlink = true;
    } else {
        oSpan.classList.add("about-me-title-o-js")
        oBlink = false;
    }
}

