function loadCSS(filename){ 
    var file = document.createElement("link");
    file.setAttribute("rel", "stylesheet");
    file.setAttribute("type", "text/css");
    file.setAttribute("href", filename);
    document.head.appendChild(file);
    }
if ( screen.width > 500)
{
loadCSS("GalleryCSS.css")
loadCSS("w3css.css")
}else{
	console.log(1)
document.styleSheets[2].disabled = true;
document.styleSheets[(document.styleSheets.length -1)].disabled = true;
loadCSS("MobileGalleryCSS.css")
loadCSS("MobileMove.css")
loadCSS("MobileGalleryCSS.css")
loadCSS("w3cssmobile.css")
}