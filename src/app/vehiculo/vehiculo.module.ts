import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'crear-vehiculo', component: CrearVehiculoComponent}
]

@NgModule({
  declarations: [
    CrearVehiculoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CrearVehiculoComponent
  ]
})
export class VehiculoModule { }
