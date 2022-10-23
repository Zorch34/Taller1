import { Serie } from './Series.js';

import { dataSeries } from './DataSeries.js';

let SeriesTbody: HTMLElement = document.getElementById('Series')!;
const AvgTemporadas: HTMLElement = document.getElementById("AvgTemporadas")!;
renderSeriesInTable(dataSeries);
console.log('Calculando promedio');
AvgTemporadas.innerHTML = `${getAvgTemporadas(dataSeries)}`

function renderSeriesInTable(Series: Serie[]): void {
    console.log('Desplegando Series');
    Series.forEach((Serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${Serie.Numero}</td>
                             <td>${Serie.Nombre}</td>
                             <td>${Serie.Canal}</td>
                             <td>${Serie.Temporadas}</td>`;
      SeriesTbody.appendChild(trElement);
    });
  }

  function getAvgTemporadas( Series:Serie[]): number {
    let AvgTemporadas: number = 0;
    Series.forEach((Serie) => AvgTemporadas = AvgTemporadas + Serie.Temporadas);
    return AvgTemporadas/Series.length;
  }
