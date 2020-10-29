//funciones para la interaccion del click //

let estrella = document.getElementById("estrella1");
estrella.onclick = function () {
    if (estrella.style.color === "white") {
        estrella.style.color = "yellow";
    } else {
        estrella.style.color = "white";
    }
}

let estrella2 = document.getElementById("estrella2");
estrella2.onclick = function () {
    if (estrella2.style.color === "white") {
        estrella2.style.color = "yellow";
    } else {
        estrella2.style.color = "white";
    }
}

let estrella3 = document.getElementById("estrella3");
estrella3.onclick = function () {
    if (estrella3.style.color === "white") {
        estrella3.style.color = "yellow";
    } else {
        estrella3.style.color = "white";
    }
}


let estrella4 = document.getElementById("estrella4");
estrella4.onclick = function () {
    if (estrella4.style.color === "white") {
        estrella4.style.color = "yellow";
    } else {
        estrella4.style.color = "white";
    }
}

let estrella5 = document.getElementById("estrella5");
estrella5.onclick = function () {
    if (estrella5.style.color === "white") {
        estrella5.style.color = "yellow";
    } else {
        estrella5.style.color = "white";
    }
}

//funcion del boton enviar para borrar las estrellas//
let hiddenStars = document.getElementById("edit");
hiddenStars.onclick = function() {
    document.getElementById("estrella1").style.display = "none";
    document.getElementById("estrella2").style.display = "none";
    document.getElementById("estrella3").style.display = "none";
    document.getElementById("estrella4").style.display = "none";
    document.getElementById("estrella5").style.display = "none";
}