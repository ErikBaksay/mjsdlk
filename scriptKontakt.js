function goToDomov(){
    var Kontakt = document.getElementById("contentKontakt");
    var Title = document.getElementById("title");
    Kontakt.classList.remove("slideIn");
    Title.classList.remove("slideIn");
    Kontakt.classList.add("slideAway");
    Title.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="index.html"
    }, 500)
}
function goToGaleria(){
    var Kontakt = document.getElementById("contentKontakt");
    var Title = document.getElementById("title");
    Kontakt.classList.remove("slideIn");
    Title.classList.remove("slideIn");
    Kontakt.classList.add("slideAway");
    Title.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="galeria.html"
    }, 500)
}
function goToKontakt(){
    var Kontakt = document.getElementById("contentKontakt");
    var Title = document.getElementById("title");
    Kontakt.classList.remove("slideIn");
    Title.classList.remove("slideIn");
    Kontakt.classList.add("slideAway");
    Title.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="kontakt.html"
    }, 500)
}