var oBlink = false;
var oSpan = document.getElementById("title-o")
var aboutTitle = document.getElementById("about-title")
var int = setInterval(blink, 1000);
var aboutList = document.getElementById("about");
var projectList = document.getElementById("projects")
var projectsTitle = document.getElementById("projects-title")


let aboutLists = document.getElementsByClassName("about-me-list-container");
let aboutListTitles = document.getElementsByClassName("about-me-list-title");

function listClick(numID) {
    let curElem = aboutLists[numID];
    let curElemTitle = aboutListTitles[numID]
    console.log(curElemTitle.innerHTML[0])
    curElem.hidden = !curElem.hidden;
    if(curElem.hidden === true) {
        curElemTitle.innerHTML = curElemTitle.innerHTML.replace("-","+");
    } else {
        curElemTitle.innerHTML = curElemTitle.innerHTML.replace("+","-");
    }
}

//If window is in mobile mode, start the description and project list as minimized.
if(window.innerWidth < 1030) {
    for(let i = 0; i < aboutLists.length; i++) {
        aboutLists[i].hidden = true;
        aboutListTitles[i].innerHTML = aboutListTitles[i].innerHTML.replace('-','+')
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

