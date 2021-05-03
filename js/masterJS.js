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
    const pizzas = document.getElementById("pizzaOpciones");
    const hamburguesas = document.getElementById("hamburguesaOpciones");
    const postres = document.getElementById("postreOpciones");
    const bebidas = document.getElementById("bebidaOpciones");
    let diccionario = new Map();

    diccionario.set("pizzas", pizzas);
    diccionario.set("hamburguesas", hamburguesas);
    diccionario.set("postres", postres);
    diccionario.set("bebidas", bebidas);

    cicloFor(id, diccionario);
}

// Funcion que en base a un diccionario con las categorias de bebida, llama a cicloFor
function mostrarMenu_Bebidas(id) {
    const jugos = document.getElementById("jugosOpciones");
    const gaseosas = document.getElementById("gaseosasOpciones");
    let diccionario = new Map();

    diccionario.set("jugos", jugos);
    diccionario.set("gaseosas", gaseosas);

    cicloFor(id, diccionario);
}

// Funcion para resaltar los botones del menu y ocultar la categoria segun sea necesario
function resaltarBoton(id) {
    resaltarElemento(id, "opcion_Categorias active")
    mostrarMenu_Comidas(id)
}

// Funcion para resaltar los botones del menu de bebidas y ocultar la categoria segun sea necesario
function resaltarBebidas(id) {
    resaltarElemento(id, "bebidas_Categorias active")
    mostrarMenu_Bebidas(id)
}
