import { Component, ElementRef, ViewChild } from '@angular/core';
import { Celda } from '../../models/celda.model';
import { UtilitiesService } from '../../services/utilities.service';
import { CrearCeldaComponent } from '../crear-celda/crear-celda.component';

@Component({
  selector: 'app-listar-celdas',
  standalone: false,
  templateUrl: './listar-celdas.component.html',
  styleUrl: './listar-celdas.component.css'
})
export class ListarCeldasComponent {

  @ViewChild(CrearCeldaComponent) crearCeldaComponent!: CrearCeldaComponent;

  celdas: Celda[] = [
    new Celda('A10', 'automovil', 'libre'),
    new Celda('A20', 'moto', 'ocupado'),
    new Celda('A30', 'automovil', 'ocupado')
  ]

  celdaSeleccionada: Celda = new Celda('', '', '');

  crearCelda() {
    const form = this.crearCeldaComponent.celdaForm;
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.celdas.push(new Celda(this.celdaSeleccionada!.codigo, this.celdaSeleccionada!.tipo, this.celdaSeleccionada!.estado));
    this.celdaSeleccionada = new Celda('', '', '');
    (document.activeElement as HTMLElement).blur(); // cambia el foco del elemento boton para que el momento de cerrar la modal no quede el foco en este
    console.log(this.celdas)
  }

}
