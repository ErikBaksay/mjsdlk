function goToDomov(){
    var Galeria = document.getElementById("contentGaleria");
    var Title = document.getElementById("title");
    Galeria.classList.remove("slideIn");
    Title.classList.remove("slideIn");
    Galeria.classList.add("slideAway");
    Title.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="index.html"
    }, 500)
}
function goToGaleria(){
    var Galeria = document.getElementById("contentGaleria");
    var Title = document.getElementById("title");
    Galeria.classList.remove("slideIn");
    Title.classList.remove("slideIn");
    Galeria.classList.add("slideAway");
    Title.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="galeria.html"
    }, 500)
}
function goToKontakt(){
    var Galeria = document.getElementById("contentGaleria");
    var Title = document.getElementById("title");
    Galeria.classList.remove("slideIn");
    Title.classList.remove("slideIn");
    Galeria.classList.add("slideAway");
    Title.classList.add("slideAway");
    setTimeout(function(){
        window.location.href="kontakt.html"
    }, 500)
}