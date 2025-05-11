import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPagoComponent } from './crear-pago/crear-pago.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'crear-pago', component: CrearPagoComponent}
]

@NgModule({
  declarations: [
    CrearPagoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CrearPagoComponent
  ]
})
export class PagosModule { }
