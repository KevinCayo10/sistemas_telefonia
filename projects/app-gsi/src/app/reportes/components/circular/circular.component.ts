import { Component } from '@angular/core';
import { Entidad } from '../../interfaces/entidad';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'gsi-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css'],
})
export class CircularComponent {
  datos = [
    {
      name: 'Egresados',
      value: 900,
    },
    {
      name: 'Titulados',
      value: 200,
    },
    {
      name: 'Empleados',
      value: 500,
    },
    {
      name: 'Desempleados',
      value: 50,
    },
  ];

  constructor(private reporteService: ReporteService) {
    this.cargarReportes();
  }

  cargarReportes() {
    this.reporteService.cargarClientes().subscribe((dataWeb) => {
      this.datos = dataWeb;
    });
  }

  view: [number, number] = [500, 300];

  gradient: boolean = true;

  legend = true;

  legendPosition: LegendPosition = LegendPosition.Right;

  doughnut = true;

  scheme: Color = {
    name: 'miEsquema',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#f00', '#0f0', '#0ff', '#ff'],
  };

  labels = true;
}
