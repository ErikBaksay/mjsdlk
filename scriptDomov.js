function goToDomov(){
    var Domov = document.getElementById("contentDomov");
    Domov.classList.remove("slideIn");
    Domov.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="index.html"
    }, 500)
}
function goToGaleria(){
    var Domov = document.getElementById("contentDomov");
    Domov.classList.remove("slideIn");
    Domov.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="galeria.html"
    }, 500)
}
function goToKontakt(){
    var Domov = document.getElementById("contentDomov");
    Domov.classList.remove("slideIn");
    Domov.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="kontakt.html"
    }, 500)
}