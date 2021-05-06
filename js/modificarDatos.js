// Mostrar paneles
function modificarEstadoPanel(claseSolicitada, estadoSolicitado) {
    const claseRequerida = document.querySelector("." + claseSolicitada);
    let estadoRequerido = "";

    if (estadoSolicitado === "mostrar") {
        estadoRequerido = "block"
    } else {
        estadoRequerido = "none"
    }

    claseRequerida.style.display = estadoRequerido;
}

function mostrarPanel(clase) {
    modificarEstadoPanel(clase, "mostrar");
}

function cerrarPanel(clase) {
    modificarEstadoPanel(clase, "ocultar");
}

/*
function ejecutarFuncion(clase) {
    let diccionario = new Map();
    diccionario.set("tablaEditarDatos", editarDatos.name);
    diccionario.set("tablaEliminarDatos", eliminarDatos.name);

    for (let [clave, valor] of diccionario) {
        if (clase === clave) {
            window[valor]()
        }
    }
}
*/

// Agregar datos
function agregarDatos() {
    let tabla = document.getElementById("contenidoTabla");

    let id = "Numero";
    let nombre = document.getElementById("nombreAgregar");
    let edad = document.getElementById("edadAgregar");
    let corral = document.getElementById("corralAgregar");
    let madre = document.getElementById("madreAgregar");

    contenidoHTML = "<tr>";
    contenidoHTML += `  <td>${id}</td>`;
    contenidoHTML += `  <td>${nombre.value}</td>`;
    contenidoHTML += `  <td>${edad.value}</td>`;
    contenidoHTML += `  <td>${corral.value}</td>`;
    contenidoHTML += `  <td>${madre.value}</td>`;
    contenidoHTML += `  <td><i class="boton botonEditar fas fa-edit" onclick="mostrarPanel('tablaEditarDatos')"></i>`;
    contenidoHTML += `  <i class="boton botonEliminar fas fa-trash-alt" onclick="mostrarPanel('tablaEliminarDatos')"></i></td>`;
    contenidoHTML += "</tr>";

    nombre.value = "";
    edad.value = "";
    corral.value = "";
    madre.value = "";

    tabla.innerHTML += contenidoHTML;
}

// Editar datos
function editarDatos() {
    console.log("Editar datos")
}

// Eliminar datos
function eliminarDatos() {
    console.log("Eliminar datos")
}

