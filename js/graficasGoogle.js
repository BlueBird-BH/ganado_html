var colorBlanco = "#FFF";
var colorVerde = "#30c1a4"

google.charts.load("current", { packages: ["corechart", "line"] });
google.charts.setOnLoadCallback(graficarDatos);

function definirLetrasBlancas(titulo) {
    let datos = {
        title: titulo,
        textStyle: { color: colorBlanco },
        titleTextStyle: { color: colorBlanco },
        gridlines: { count: 0 },
        baselineColor: colorBlanco
    }

    return datos
}

function recolectarDatos() {
    return [ [1, 10], [2, 23], [3, 17], [4, 18], [5, 9] ]
}

function graficarDatos() {
    let datos = new google.visualization.DataTable();
    let dondeVisualizar = document.getElementById("graficaProduccion");
    
    let fondoTransparente = { fill: "transparent" }
    let ejeHorizontal = definirLetrasBlancas("Dia");
    let ejeVertical = definirLetrasBlancas("Litros de leche producidos");

    let opciones = {
        colors: [colorVerde],
        hAxis: ejeHorizontal,
        vAxis: ejeVertical,
        legend: {position: 'none'},
        chartArea: { backgroundColor: fondoTransparente },
        backgroundColor: fondoTransparente,
        width: 900,
        height: 600
    };

    datos.addColumn("number", "X");
    datos.addColumn("number", "Litros");
    datos.addRows(recolectarDatos());

    let grafica = new google.visualization.LineChart(dondeVisualizar);
    grafica.draw(datos, opciones);
}