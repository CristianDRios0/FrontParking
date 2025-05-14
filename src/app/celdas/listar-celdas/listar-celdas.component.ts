import { Component, ViewChild } from '@angular/core';
import { Celda } from '../../models/celda.model';
import { Modal } from 'bootstrap';
import { CrearCeldaComponent } from '../crear-celda/crear-celda.component';
import { Parqueo } from '../../models/parqueo.model';
import { Vehiculo } from '../../models/vehiculo.model';
import { Cliente } from '../../models/cliente.model';
import { CeldaService } from '../../services/celda.service';
import { ParqueoService } from '../../services/parqueo.service';
import { VehiculoService } from '../../services/vehiculo.service';
import { ClienteService } from '../../services/cliente.service';
import { TarifaService } from '../../services/tarifa.service';
import { Tarifa } from '../../models/tarifa.model';

@Component({
  selector: 'app-listar-celdas',
  standalone: false,
  templateUrl: './listar-celdas.component.html',
  styleUrl: './listar-celdas.component.css'
})
export class ListarCeldasComponent {

  constructor(private _celdaService: CeldaService, 
    private _parqueoService: ParqueoService, 
    private _vehiculoService: VehiculoService, 
    private _clienteService: ClienteService,
    private _tarifaService: TarifaService) {}

  ngOnInit() {
    this.getCeldas();
    this.getParqueos();
    this.getVehiculos();
    this.getClientes();
    this.getTarifas();
  }

  //Variables globales del componente

  celdaSeleccionada: Celda = new Celda('', '', ''); // variable para el biding de datos desde la celda seleccionada
  vehiculoSeleccionado: Vehiculo | undefined; // variable para el biding de datos para el vehiculo encontrado en el parqueo
  clienteSeleccionado: Cliente | undefined; // variable para el biding de datos para el cliente encontrado en el parqueo
  parqueoSeleccionado: Parqueo | undefined;
  detallesModal: boolean = false; //Variable para controlar si se muestra la modal detalles en el metodo celdaActual
  parquearModal: boolean = false; //Variable para controlar si se muestra la modal parquear en el metodo celdaActual

  @ViewChild(CrearCeldaComponent) crearCeldaComponent!: CrearCeldaComponent;

  celdas: Celda[] = [];
  parqueos: Parqueo[] = [];
  vehiculos: Vehiculo[] = [];
  clientes: Cliente[] = [];
  tarifas: Tarifa[] = [];

  /*Metodo para limpiar la celda seleccionada antes de abrir la modal de crear celda, este es necesario para no afectar el biding de datos cuando se
  ven los detalles de una celda antes de crear una nueva celda*/
  limpiarCeldaSeleccionada() {
    this.celdaSeleccionada = new Celda('', '', '');
  }

  // Metodo para definir cual celda mostrar en funcion del estado de la celda aplicando la blase Modal de Bootstrap
  celdaActual(celda: Celda) {
    this.parqueoSeleccionado = undefined;
    this.vehiculoSeleccionado = undefined;
    this.clienteSeleccionado = undefined;
    this.celdaSeleccionada = celda;

    this.getParqueoByCelda(celda.id!, (parqueo) => {
      if (!parqueo) return; 

      const vehiculoId = parqueo.vehiculoId;
      this.getVehiculoById(vehiculoId, (vehiculo) => {
        if (!vehiculo) return; 

          const clienteId = vehiculo.clienteId;
          if (clienteId !== undefined) {
            this.getClienteById(clienteId, (cliente) => {})
          }            
      })        
    });
    
    if (celda.estado === 'Ocupado' || celda.estado === 'Reservado') {
      this.detallesModal = true;
      this.parquearModal = false;
      const modalElementDetalle = document.getElementById('infoCeldaModal');
      if (modalElementDetalle) {
        const modalDetalle = new Modal(modalElementDetalle);
        modalDetalle.show();
      }
    } else {
      this.detallesModal = false;
      this.parquearModal = true;
      const modalElementParquear = document.getElementById('crearParqueoModal');
      if (modalElementParquear) {
        const modalParquear = new Modal(modalElementParquear);
        modalParquear.show();
      }
    }
  }

  //Metodo para buscar el parqueo por codigo de la celda y poder pasar los datos para proyectarlos en la modal de detalles
  getParqueoByCelda(celdaId: number, callback: (parqueo: Parqueo | null) => void): void {
    this._parqueoService.getParqueoByCeldaId(celdaId).subscribe({
      next: (data) => {
        const parqueo = new Parqueo(
          data.vehiculoId,
          data.celdaId,
          data.tarifaId,
          data.estado,
          data.fechaEntrada,
          data.fechaSalida,
          data.totalPagado,
          data.id
        );
        this.parqueoSeleccionado = parqueo;
        callback(parqueo);
      },
      error: (e) => {
        console.log('Error al obtener parqueo:', e);
        callback(null);
      }
    })
  }

  getVehiculoById(vehiculoId: number, callback: (vehiculo: Vehiculo | null) => void): void {
    this._vehiculoService.getVehiculoById(vehiculoId).subscribe({
      next: (vehiculo) => {
        this.vehiculoSeleccionado = vehiculo;
        callback(vehiculo);
      },
      error: (e) => {
        console.log('Error al obtener vehículo:', e)
        callback(null);
      }
    })
  }

  getClienteById(clienteId: number, callback: (cliente: Cliente | null) => void): void {
    this._clienteService.getClienteById(clienteId).subscribe({
      next: (cliente) => {
        this.clienteSeleccionado = cliente;
        callback(cliente);
      },
      error: (e) => {
        console.log('Error al obtener cliente:', e);
        callback(null);
      }
    })
  }

  getCeldas() {
    this._celdaService.getCeldas().subscribe({
      next: (rs) => {
        this.celdas = rs;
      },
      error: (e) => {
        console.log(e);
      }
    })
      
  }

  getParqueos() {
    this._parqueoService.getParqueos().subscribe({
      next: (rs) => {
        this.parqueos = rs;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  getVehiculos() {
    this._vehiculoService.getVehiculos().subscribe({
      next: (rs) => {
        this.vehiculos = rs;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  getClientes() {
    this._clienteService.getClientes().subscribe({
      next: (rs) => {
        this.clientes = rs;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  getTarifas() {
    this._tarifaService.getCeldas().subscribe({
      next: (rs) => {
        this.tarifas = rs;
      },
      error: (e) => {
        console.log('No se pudieron cargar las tarifas')
      }
    })
  }
}
