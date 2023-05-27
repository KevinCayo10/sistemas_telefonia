import { Component } from '@angular/core';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'gsi-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.css'],
})
export class HorizontalComponent {
  datos: any[] = [];
  /*  datos: Entidad[] = [
    {
      name: 'Tungurahua',
      value: 300000,
    },
    {
      name: 'Cotopaxi',
      value: 500000,
    },
    {
      name: 'Pichincha',
      value: 3000000,
    },
    {
      name: 'Guayas',
      value: 4500000,
    },
    {
      name: 'Sucumbios',
      value: 500000,
    },
  ];
*/
  registros: any[] = [];

  constructor(private reporteService: ReporteService) {
    this.cargarReportes();
  }

  cargarReportes() {
    this.reporteService.cargarClientes().subscribe((dataWeb) => {
      this.datos = dataWeb;
      console.log(this.registros);
    });
  }

  //Ancho y alto del grafico
  view: [number, number] = [700, 400];

  //Colores del grafico
  scheme: Color = {
    name: 'miEsquema',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f00', '#0f0', '#0ff', '#ff'],
  };

  legend = true;
  legendPosition: LegendPosition = LegendPosition.Right;

  xAxis = true;
  yAxis = true;

  showXAxisLabel = true;
  showYAxisLabel = true;

  xAxisLabel = 'Poblacion';
  yAxisLabel = 'Provincias';
}
