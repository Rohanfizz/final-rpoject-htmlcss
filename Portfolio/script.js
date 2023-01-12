function goToAbout() {
    var elmntToView = document.querySelector(".about");
    elmntToView.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
    });
    console.log("asd");
}

function goToProjects() {
    var elmntToView = document.querySelector(".projects");
    elmntToView.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    });
}
function goToConnect() {
    var elmntToView = document.querySelector(".connect");
    elmntToView.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    });
}

let aboutBtn = document.querySelector(".about-nav");
aboutBtn.onclick = goToAbout;

let projectsBtn = document.querySelector(".projects-nav");
projectsBtn.onclick = goToProjects;

let connectBtn = document.querySelector(".connect-nav");
connectBtn.onclick = goToConnect;
