window.onload = function() {
    document.getElementById("title").style.opacity = 1;
    document.getElementById("moreDetails").style.paddingTop = "0vh";
    document.getElementById("moreDetails").style.opacity = 1;
}

function openDetails() {
    var main = document.getElementById("main");
    var details = document.getElementById("details");
    main.style.opacity = "0";
    details.style.top = "15vh";
    details.style.left = "20vh";
    details.style.zIndex = 100;
    details.style.opacity = 1;
    details.style.transform = "scale(1)";
}

function closeDetails() {
    var main = document.getElementById("main");
    var details = document.getElementById("details");
    main.style.opacity = "1";
    details.style.top = "37vh";
    details.style.left = "5vh";
    details.style.zIndex = -3;
    details.style.opacity = 0;
    details.style.transform = "scale(0)";
}