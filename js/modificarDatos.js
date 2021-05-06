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
    ejecutarFuncion(clase)
}

function cerrarPanel(clase) {
    modificarEstadoPanel(clase, "ocultar");
}

// General
function ejecutarFuncion(clase) {
    let diccionario = new Map();
    diccionario.set("tablaEditarDatos", cargarDatosEditar.name);
    diccionario.set("tablaEliminarDatos", cargarDatosEliminar.name);

    for (let [clave, valor] of diccionario) {
        if (clase === clave) {
            window[valor]()
        }
    }
}

// Agregar datos
function agregarDatos() {
    let tabla = document.getElementById("contenidoTabla");

    let id = "ID de prueba";
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
    cerrarPanel("tablaAgregarDatos")
}

// Editar datos
function cargarDatosEditar() {
    let id = document.getElementById("codigoEditar");

    id.value = "ID de prueba"
}

function editarDatos() {
    console.log("Editar datos")
    cerrarPanel("tablaEditarDatos")
}

// Eliminar datos
function cargarDatosEliminar() {
    let id = document.getElementById("codigoEliminar");
    let nombre = document.getElementById("nombreEliminar");

    id.value = "ID de prueba"
    nombre.value = "Nombre de prueba"
}

function eliminarDatos() {
    cerrarPanel("tablaEliminarDatos")
    console.log("Eliminar datos")
}

