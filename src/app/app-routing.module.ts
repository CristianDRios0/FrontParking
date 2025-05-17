import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'home', loadChildren: () => import('./layout/layout.module').then(l => l.LayoutModule)},
  {path: 'celdas', loadChildren: () => import('./celdas/celdas.module').then(c => c.CeldasModule)},
  {path: 'vehiculo', loadChildren: () => import('./vehiculo/vehiculo.module').then(v => v.VehiculoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
