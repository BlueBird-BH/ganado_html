function mostrarPanel() {
  modificarEstado("mostrar");
}

function cerrarPanel() {
  modificarEstado("ocultar");
}

function modificarEstado(estadoSolicitado) {
  const panelDatos = document.querySelector(".agregarDatosTabla");
  let estadoRequerido = "";

  if (estadoSolicitado === "mostrar") {
    estadoRequerido = "block"
  } else {
    estadoRequerido = "none"
  }

  panelDatos.style.display = estadoRequerido;
}