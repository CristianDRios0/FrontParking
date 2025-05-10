import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarCeldasComponent } from './listar-celdas/listar-celdas.component';
import { CrearCeldaComponent } from './crear-celda/crear-celda.component';
import { FormsModule } from '@angular/forms';
import { DetalleCeldaComponent } from './detalle-celda/detalle-celda.component';
import { ParqueoModule } from '../parqueo/parqueo.module';

const routes: Routes = [
  {path: '', component: ListarCeldasComponent},
  {path: 'crear-celda', component: CrearCeldaComponent},
  {path: 'detalle-celda', component: DetalleCeldaComponent}
]

@NgModule({
  declarations: [
    ListarCeldasComponent,
    CrearCeldaComponent,
    DetalleCeldaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ParqueoModule
  ],
  exports: [
    RouterModule,
    ListarCeldasComponent,
    CrearCeldaComponent,
    DetalleCeldaComponent
  ]
})
export class CeldasModule { }
