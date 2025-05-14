import { Component, input, Input, SimpleChanges } from '@angular/core';
import { Celda } from '../../models/celda.model';
import { Parqueo } from '../../models/parqueo.model';
import { Vehiculo } from '../../models/vehiculo.model';
import { Cliente } from '../../models/cliente.model';
import { Tarifa } from '../../models/tarifa.model';

@Component({
  selector: 'app-crear-pago',
  standalone: false,
  templateUrl: './crear-pago.component.html',
  styleUrl: './crear-pago.component.css'
})
export class CrearPagoComponent {

  @Input() celdaPagoInput: Celda | undefined; // variable para recibir los datos desde el componente listar celdas sobre la celda en donde se va a pagar
  @Input() parqueoPagoInput: Parqueo | undefined; // variable para recibir los datos de todos los parqueos existentes cargados desde el componente listar celdas
  @Input() vehiculoPagoInput: Vehiculo | undefined; // variable para recibir los datos de todos los vehiculos existentes cargados desde el componente listar celdas
  @Input() clientePagoInput: Cliente | undefined; // variable para recibir los datos de todos los clientes existentes cargados desde el componente listar celdas
  @Input() tarifaPagoInput: Tarifa[] | undefined; // Variable para recibir el arreglo de tarifas cargado desde el componente padre listar celdas

  parqueoSeleccionado?: Parqueo;
  vehiculoSeleccionado?: Vehiculo;
  clienteSeleccionado?: Cliente;
  tarifas: Tarifa[] = [];
  montoPago: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes ['parqueoPagoInput'] && this.parqueoPagoInput) {
      this.parqueoSeleccionado = this.parqueoPagoInput;
    }
    if (changes ['clientePagoInput'] && this.clientePagoInput) {
      this.clienteSeleccionado = this.clientePagoInput;
    }
    if (changes ['tarifaPagoInput'] && this.tarifaPagoInput) {
      this.tarifas = [...this.tarifaPagoInput];
    }

    this.montoPago = this.calcularMonto();
  }

  //Metodo para calcular el monto a pagar
  calcularMonto(): number {
    let montoPago = 0

    if (this.parqueoSeleccionado && this.parqueoSeleccionado.fechaEntrada) {
      const fechaEntrada = new Date(this.parqueoSeleccionado.fechaEntrada);
      const fechaSalida = new Date();
      const diferencia = fechaSalida.getTime() - fechaEntrada.getTime();
      const tiempoParqueo = Math.floor(diferencia / (1000 * 60 * 60))

      const tarifaAsociada = this.tarifas.find(t => t.id === this.parqueoSeleccionado?.tarifaId);

      if (tarifaAsociada?.monto) {
        montoPago = tiempoParqueo * tarifaAsociada?.monto;
      }    
    }
    return montoPago;
  }

  generarPago() {
    
  }

}
