// Funcion para resaltar el elemento requerido
function resaltarElemento(id, categoria) {
    const botonActual = document.getElementsByClassName(categoria);
    const botonElegido = document.getElementById(id);

    botonActual[0].classList.remove("active");
    botonElegido.classList.add("active");
}

// Funcion que por medio de un ciclo For enseña y oculta el valor requerido en el HTML
function cicloFor(id, diccionario) {
    for (let [clave, valor] of diccionario) {
        valor.style.display = "none";
        if (id == clave) {
            if (valor.style.display === "none") {
                valor.style.display = "block";
            } else {
                valor.style.display = "none";
            }
        }
    }
}

// Funcion que en base a un diccionario con las categorias de comida, llama a cicloFor
function mostrarMenu_Comidas(id) {
    const tabla = document.getElementById("tablasOpciones");
    const graficas = document.getElementById("graficasOpciones");
    let diccionario = new Map();

    diccionario.set("tablas", tabla);
    diccionario.set("graficas", graficas);

    cicloFor(id, diccionario);
}

// Funcion para resaltar los botones del menu y ocultar la categoria segun sea necesario
function resaltarBoton(id) {
    resaltarElemento(id, "opcion_Categorias active")
    mostrarMenu_Comidas(id)
}
