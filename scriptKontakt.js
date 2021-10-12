function goToDomov(){
    var Kontakt = document.getElementById("contentKontakt");
    Kontakt.classList.remove("slideIn");
    Kontakt.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="index.html"
    }, 400)
}
function goToGaleria(){
    var Kontakt = document.getElementById("contentKontakt");
    Kontakt.classList.remove("slideIn");
    Kontakt.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="galeria.html"
    }, 400)
}
function goToKontakt(){
    var Kontakt = document.getElementById("contentKontakt");
    Kontakt.classList.remove("slideIn");
    Kontakt.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="kontakt.html"
    }, 400)
}