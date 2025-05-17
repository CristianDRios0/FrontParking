import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { CeldasModule } from '../celdas/celdas.module';
import { VehiculoModule } from '../vehiculo/vehiculo.module';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent, 
    children: [
      {path: 'listar-celdas', loadChildren: () => import('../celdas/celdas.module').then(lc => lc.CeldasModule)},
      {path: 'parqueo', loadChildren: () => import('../parqueo/parqueo.module').then(p => p.ParqueoModule)}
    ]
  }
]

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CeldasModule,
    VehiculoModule
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutModule { }
