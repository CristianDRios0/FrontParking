import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearParqueoComponent } from './crear-parqueo/crear-parqueo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'crear-parqueo', component: CrearParqueoComponent}
]

@NgModule({
  declarations: [
    CrearParqueoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    CrearParqueoComponent
  ]
})
export class ParqueoModule { }
