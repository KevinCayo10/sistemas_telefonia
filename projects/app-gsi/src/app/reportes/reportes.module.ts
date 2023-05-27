import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { PageReportsComponent } from './pages/page-reports/page-reports.component';
import { VerticalComponent } from './components/vertical/vertical.component';
import { CircularComponent } from './components/circular/circular.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HorizontalComponent } from './components/horizontal/horizontal.component';

@NgModule({
  declarations: [PageReportsComponent, VerticalComponent, CircularComponent, HorizontalComponent],
  imports: [CommonModule, ReportesRoutingModule, NgxChartsModule],
})
export class ReportesModule {}
