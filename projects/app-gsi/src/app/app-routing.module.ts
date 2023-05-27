import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { IsAuthenticatedGuard } from './helper/services/is-authenticated.guard';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'clientes',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('./clientes/clientes.module').then((m) => m.ClientesModule),
  },
  {
    path: 'cobertura',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('./cobertura/cobertura.module').then((m) => m.CoberturaModule),
  },
  {
    path: 'planes',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('./planes/planes.module').then((m) => m.PlanesModule),
  },
  {
    path: 'proveedores',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('./proveedores/proveedores.module').then(
        (m) => m.ProveedoresModule
      ),
  },
  {
    path: 'soporte',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('./soporte/soporte.module').then((m) => m.SoporteModule),
  },
  {
    path: 'stock',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('./stock/stock.module').then((m) => m.StockModule),
  },
  {
    path: 'tecnicos',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('./tecnicos/tecnicos.module').then((m) => m.TecnicosModule),
  },
  {
    path: 'usuarios',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: 'reportes',
    canActivate: [IsAuthenticatedGuard],
    loadChildren: () =>
      import('./reportes/reportes.module').then((m) => m.ReportesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
