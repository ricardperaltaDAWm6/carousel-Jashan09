window.onload = function () {
    // Variables

    //document.getElementById("retroceder").onclick = pasarFoto;


    // Añadir las tres imágenes del directorio "img" al array IMAGENES.
    const IMAGENES = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;

    // posición actual guarda el indice de la imágen que se está mostrando (del array IMAGENES)
    let posicionActual = 0;

    // variables con los elementos del DOM HTML, aplicar el selector necesario.
    let $botonRetroceder = document.getElementById("retroceder");
    let $botonAvanzar = document.getElementById("avanzar");
    let $imagen = document.getElementById("imagen");
    let $botonPlay = document.getElementById("play");
    let $botonStop = document.getElementById("stop");

    // Identificador del proceso que se ejecuta con setInterval().
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        // se incrementa el indice (posicionActual)

        posicionActual += 1;
        if(posicionActual == 3){
            posicionActual = 0;
        }
        renderizarImagen();

        // ...y se muestra la imagen que toca.
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {

        posicionActual -= 1;
        if(posicionActual == -1){
            posicionActual = 2;
        }
        renderizarImagen();



        // se decrementa el indice (posicionActual)

        // ...y se muestra la imagen que toca.
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {

        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        // Documentación de la función setInterval: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
        // Mediante la función setInterval() se ejecuta la función pasarFoto cada TIEMPO_INTERVALO_MILESIMAS_SEG.


        IntervalId = setInterval(pasarFoto, 1000);

        $botonStop.disabled = false;

        $botonRetroceder.disabled = true;
        $botonAvanzar.disabled = true;
        $botonPlay.disabled = true;





        // Desactivamos los botones de control necesarios. Utilizando setAttribute y removeAttribute.

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        // Desactivar la ejecución de intervalo.

        clearInterval(IntervalId);

        $botonStop.disabled = true;

        $botonRetroceder.disabled = false;
        $botonAvanzar.disabled = false;
        $botonPlay.disabled = false;



        // Activamos los botones de control. Utilizando setAttribute y removeAttribute.
    }

    function zoomInFunc(event) {

        //alert(event.offsetX + " " + event.clientY);

        /*
        var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
        var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
        $imagen.style.backgroundPosition = (-posX * 4) + "px " + (-posY * 4) + "px";
        */

        //$imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;


    }


    // Eventos
    // Añadimos los evenntos necesarios para cada boton. Mediante addEventListener.
    $botonRetroceder.addEventListener("click", retrocederFoto);
    $botonAvanzar.addEventListener("click", pasarFoto);

    $botonPlay.addEventListener("click", playIntervalo);
    $botonStop.addEventListener("click", stopIntervalo);

    $imagen.addEventListener("click", zoomInFunc, true)



    // Iniciar
    renderizarImagen();
} 



