import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  {path:'', component:PageLoginComponent},
  {path:'clientes',
  loadChildren:()=> import('./clientes/clientes.module').then((m)=>m.ClientesModule)},
  {path:'cobertura',
  loadChildren:()=> import('./cobertura/cobertura.module').then((m)=>m.CoberturaModule)},
  {path:'planes',
  loadChildren:()=> import('./planes/planes.module').then((m)=>m.PlanesModule)},
  {path:'proveedores',
  loadChildren:()=> import('./proveedores/proveedores.module').then((m)=>m.ProveedoresModule)},
  {path:'soporte',
  loadChildren:()=> import('./soporte/soporte.module').then((m)=>m.SoporteModule)},
  {path:'stock',
  loadChildren:()=> import('./stock/stock.module').then((m)=>m.StockModule)},
  {path:'tecnicos',
  loadChildren:()=> import('./tecnicos/tecnicos.module').then((m)=>m.TecnicosModule)},
  {path:'usuarios',
  loadChildren:()=> import('./usuarios/usuarios.module').then((m)=>m.UsuariosModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
