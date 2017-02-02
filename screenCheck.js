function loadCSS(filename){ 
    var file = document.createElement("link");
    file.setAttribute("rel", "stylesheet");
    file.setAttribute("type", "text/css");
    file.setAttribute("href", filename);
    document.head.appendChild(file);
    }
if ( screen.width > 500)
{
loadCSS("Ed-Aid.css")
}else{
document.styleSheets[2].disabled = true;
document.styleSheets[(document.styleSheets.length -1)].disabled = true;
loadCSS("Mobile Ed-Aid.css")
loadCss("MobileMove.css")
}

