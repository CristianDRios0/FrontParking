import { Component, ElementRef, ViewChild } from '@angular/core';
import { Celda } from '../../models/celda.model';
import { Modal } from 'bootstrap';
import { CrearCeldaComponent } from '../crear-celda/crear-celda.component';
import { Parqueo } from '../../models/parqueo.model';
import { Vehiculo } from '../../models/vehiculo.model';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-listar-celdas',
  standalone: false,
  templateUrl: './listar-celdas.component.html',
  styleUrl: './listar-celdas.component.css'
})
export class ListarCeldasComponent {

  //Variables globales del componente

  celdaSeleccionada: Celda = new Celda('', '', ''); // variable para el biding de datos desde la celda seleccionada
  vehiculoSeleccionado: Vehiculo | undefined; // variable para el biding de datos para el vehiculo encontrado en el parqueo
  clienteSeleccionado: Cliente | undefined; // variable para el biding de datos para el cliente encontrado en el parqueo
  parqueoSeleccionado: Parqueo | undefined;
  detallesModal: boolean = false; //Variable para controlar si se muestra la modal detalles en el metodo celdaActual
  parquearModal: boolean = false; //Variable para controlar si se muestra la modal parquear en el metodo celdaActual

  @ViewChild(CrearCeldaComponent) crearCeldaComponent!: CrearCeldaComponent;

  celdas: Celda[] = [
    new Celda('A10', 'automovil', 'libre', 1),
    new Celda('A20', 'moto', 'ocupado', 2),
    new Celda('A30', 'automovil', 'ocupado', 3)
  ]

  parqueos: Parqueo[] = [
    new Parqueo(1, 2, 1, 'activo', 1, new Date(), undefined, undefined),
    new Parqueo(2, 3, 1, 'activo', 2, new Date(), undefined, undefined)
  ]

  vehiculos: Vehiculo[] = [
    new Vehiculo('ABC123', 1, 1),
    new Vehiculo('DEF456', 2, 2),
  ]

  clientes: Cliente[] = [
    new Cliente('Juan Perez', 1, 'ocasional', new Date(), new Date(), 1),
    new Cliente('Maria Lopez', 2, 'ocasional', new Date(), new Date(), 2),
  ]

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
    const parqueo = this.getParqueoByCelda(celda.id!);
    if (parqueo) {
      const vehiculo = this.getVehiculoById(parqueo.getVehiculoId());
      if (vehiculo) {
        const clienteId = vehiculo.getClienteId();
        if (clienteId !== undefined){
          this.getClienteById(clienteId);
        }
      }
    }

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

  //Metodo para buscar el parqueo por codigo de la celda y poder pasar los datos para proyectarlos en la modal de detalles
  getParqueoByCelda(celdaId: number): Parqueo | undefined {
    const parqueo = this.parqueos.find(p => p.getCeldaId()  === celdaId);
    this.parqueoSeleccionado = parqueo;
    console.log(parqueo);
    return parqueo;
  }

  getVehiculoById(vehiculoId: number): Vehiculo | undefined {
    const vehiculo = this.vehiculos.find(v => v.getId() === vehiculoId);
    this.vehiculoSeleccionado = vehiculo;
    console.log(vehiculo);
    return vehiculo;
  }

  getClienteById(clienteId: number): Cliente | undefined {
    const cliente = this.clientes.find(c => c.getId() === clienteId);
    this.clienteSeleccionado = cliente;
    console.log(cliente);
    return cliente;
  }
}
