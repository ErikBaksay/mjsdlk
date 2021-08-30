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
function closeImage(){
    var Close = document.getElementById("close");
    var ZoomIn = document.getElementById("zoomIn")

    ZoomIn.style.display="none";
}
function ZoomInImage(id){
    var ZoomInImg = document.getElementById("zoomInImg");
    var ZoomIn = document.getElementById("zoomIn");
    
    ZoomInImg.src="./photos/"+id+".jpg";
    ZoomIn.style.display="flex";
    document.getElementById("zoomInImg").setAttribute("data-imageID",id); 
}
function previousImage(){
    var ZoomInImg = document.getElementById("zoomInImg");
    var ZoomInImgID = parseInt(document.getElementById("zoomInImg").getAttribute("data-imageID"));
    
    if (ZoomInImgID==1){
        newZoomInImgID=21;
    }else{
        newZoomInImgID = ZoomInImgID-1;
    }
    document.getElementById("zoomInImg").setAttribute("data-imageID", newZoomInImgID); 
    ZoomInImg.src="./photos/"+(newZoomInImgID)+".jpg";

}
function nextImage(){
    var ZoomInImg = document.getElementById("zoomInImg");
    var ZoomInImgID = parseInt(document.getElementById("zoomInImg").getAttribute("data-imageID"));

    if (ZoomInImgID==21){
        newZoomInImgID=1;
    }else{
        newZoomInImgID = ZoomInImgID+1;
    }
    document.getElementById("zoomInImg").setAttribute("data-imageID", newZoomInImgID); 
    ZoomInImg.src="./photos/"+(newZoomInImgID)+".jpg";
}

document.addEventListener('keydown', e =>{
    if (e.key == "ArrowLeft"){
        previousImage();
    }else if(e.key == "ArrowRight"){
        nextImage();
    }
})