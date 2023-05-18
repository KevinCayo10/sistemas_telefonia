import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoberturaRoutingModule } from './cobertura-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CoberturaRoutingModule,
    SharedModule
  ]
})
export class CoberturaModule { }
