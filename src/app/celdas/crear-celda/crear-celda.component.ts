import { Component, Input, ViewChild } from '@angular/core';
import { Celda } from '../../models/celda.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-celda',
  standalone: false,
  templateUrl: './crear-celda.component.html',
  styleUrl: './crear-celda.component.css'
})
export class CrearCeldaComponent {

  @Input() celdaInput: Celda | undefined; // variable para recibir los datos desde el componente padre
  @ViewChild('formCelda') formCelda!: NgForm;

  get celdaForm() {
    return this.formCelda;
  }

}
