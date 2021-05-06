google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(graficarDatos);

function graficarDatos() {
    var datos = new google.visualization.DataTable();

    datos.addColumn('number', 'X');
    datos.addColumn('number', 'Dogs');

    datos.addRows([
        [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9],
        [6, 11], [7, 27], [8, 33], [9, 40], [10, 32], [11, 35]
    ]);

    var opcionesEjes = {
        hAxis: {
            title: 'Tiempo'
        },
        vAxis: {
            title: 'Litros de leche producidos'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(datos, opcionesEjes);
}