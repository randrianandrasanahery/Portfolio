

function magnify(imageId, valeur_zoom){
    const img = document.getElementById(imageId)

    // creation element pour le magnify

    const element = document.createElement('DIV')
    element.setAttribute('class', 'image_magnify');

    // insertion magnify de l'element

    img.parentElement.insertBefore(element,img);

    // mettre une background de l'element en zoom

    element.style.backgroundImage = "url ('" + img.src + "')";
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundSize = (img.width * valeur_zoom) + "px" + (img.height * valeur_zoom) + "px";
    const bw = 3;

    const wid = element.offsetWidth / 2;
    const hei = element.offsetHeight / 2;
    // execution de la function quand il y a de mouvement souris
    element.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    // quand t-on touche sur le fenetre

    element.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    
    function moveMagnifier(e){
        e.preventDefault();
        // prendre la position de x et y de la souris
        var position = getCursorPos(e)
        var x = position.x;
        var y = position.y;
        if (x > img.width - (wid / valeur_zoom)){
            x = img.width - (wid / valeur_zoom);
        }

        if(x <wid / valeur_zoom){
            x = wid/ valeur_zoom;
        }
        if(y > img.height - (hei / valeur_zoom)){
            y = img.height - ( hei / valeur_zoom);
        }
        if(y < hei / valeur_zoom){
            y = hei / valeur_zoom;
        }

        // mettre le position sur l'element 
        element.style.left = (x - wid) + "px";
        element.style.top = (y - hei) + "px";

        // affichage magnify des qu'il se passe
        element.style.backgroundPosition = "-" + ((x*valeur_zoom) - wid + bw) + "px -" + ((y * valeur_zoom) - hei + bw) + "px";

    }

    function getCursorPosition(e){
        var verticaleX = 0 , horizontalY = 0, a
        e = e || window.event;
        // prendre le position verticaleX et horizontalY sur l'image
        a.getBoundingClientRect();
        verticaleX = e.pageX - a.left;
        horizontalY = e.pageY - a.top;

        // si apres scrolle

        verticaleX = verticaleX - window.pageXOffset;
        horizontalY = horizontalY - window.pageYOffset;

        return  {verticaleX :verticaleX, horizontalY:horizontalY};
    }
}