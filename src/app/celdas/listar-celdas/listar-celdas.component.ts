import { Component, ElementRef, ViewChild } from '@angular/core';
import { Celda } from '../../models/celda.model';
import { Modal } from 'bootstrap';
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

  //Variables globales del componente
  celdaSeleccionada: Celda = new Celda('', '', ''); // variable para el biding de datos desde la celda seleccionada
  detallesModal: boolean = false; //Variable para controlar si se muestra la modal detalles en el metodo celdaActual
  parquearModal: boolean = false; //Variable para controlar si se muestra la modal parquear en el metodo celdaActual

  //Metodo para crear la celda
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

  // Metodo para definir cual celda mostrar en funcion del estado de la celda aplicando la blase Modal de Bootstrap
  celdaActual(celda: Celda) {
    this.celdaSeleccionada = celda;
    if (celda.estado === 'ocupado' || celda.estado === 'reservado') {
      this.detallesModal = true;
      this.parquearModal = false;
      const modalElementDetalle = document.getElementById('infoCeldaModal');
      if (modalElementDetalle) {
        const modalDetalle = new Modal(modalElementDetalle);
        modalDetalle.show();
        console.log(celda)
      }
    } else {
      this.detallesModal = false;
      this.parquearModal = true;
      const modalElementParquear = document.getElementById('crearParqueoModal');
      if (modalElementParquear) {
        const modalParquear = new Modal(modalElementParquear);
        modalParquear.show();
        console.log(celda)
      }
    }
  }

  /*Metodo para limpiar la celda seleccionada antes de abrir la modal de crear celda, este es necesario para no afectar el biding de datos cuando se
    ven los detalles de una celda antes de crear una nueva celda*/
  limpiarCeldaSeleccionada() {
    this.celdaSeleccionada = new Celda('', '', '');
  }
}
