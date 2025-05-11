import { Component, Input } from '@angular/core';
import { Celda } from '../../models/celda.model';
import { Parqueo } from '../../models/parqueo.model';
import { Vehiculo } from '../../models/vehiculo.model';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-crear-pago',
  standalone: false,
  templateUrl: './crear-pago.component.html',
  styleUrl: './crear-pago.component.css'
})
export class CrearPagoComponent {

  @Input() celdaPagoInput: Celda | undefined; // variable para recibir los datos desde el componente listar celdas sobre la celda en donde se va a pagar
  @Input() parqueoPagoInput: Parqueo[] | undefined; // variable para recibir los datos de todos los parqueos existentes cargados desde el componente listar celdas
  @Input() vehiculoPagoInput: Vehiculo[] | undefined; // variable para recibir los datos de todos los vehiculos existentes cargados desde el componente listar celdas
  @Input() clientePagoInput: Cliente[] | undefined; // variable para recibir los datos de todos los clientes existentes cargados desde el componente listar celdas

  parqueoSeleccionado?: Parqueo;
  vehiculoSeleccionado?: Vehiculo;
  clienteSeleccionado?: Cliente

  ngOnInit() {
  }

  generarPago() {
    
  }

}
