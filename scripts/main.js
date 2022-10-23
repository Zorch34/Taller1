import { dataSeries } from './DataSeries.js';
var SeriesTbody = document.getElementById('Series');
var AvgTemporadas = document.getElementById("AvgTemporadas");
renderSeriesInTable(dataSeries);
console.log('Calculando promedio');
AvgTemporadas.innerHTML = "" + getAvgTemporadas(dataSeries);
function renderSeriesInTable(Series) {
    console.log('Desplegando Series');
    Series.forEach(function (Serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + Serie.Numero + "</td>\n                             <td>" + Serie.Nombre + "</td>\n                             <td>" + Serie.Canal + "</td>\n                             <td>" + Serie.Temporadas + "</td>";
        SeriesTbody.appendChild(trElement);
    });
}
function getAvgTemporadas(Series) {
    var AvgTemporadas = 0;
    Series.forEach(function (Serie) { return AvgTemporadas = AvgTemporadas + Serie.Temporadas; });
    return AvgTemporadas / Series.length;
}
