import { Component, ElementRef, Input } from '@angular/core';
import { Celda } from '../../models/celda.model';
import { Parqueo } from '../../models/parqueo.model';
import { Vehiculo } from '../../models/vehiculo.model';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-detalle-celda',
  standalone: false,
  templateUrl: './detalle-celda.component.html',
  styleUrl: './detalle-celda.component.css'
})
export class DetalleCeldaComponent {

  @Input() celdaDetalleInput: Celda | undefined; // Variable para recibir los elementos desde el componente padre en la modal de detaller de la celda
  @Input() celdaParqueoDetalleInput: Parqueo | undefined;
  @Input() celdaVehiculoDetalleInput: Vehiculo | undefined;
  @Input() celdaClienteDetalleInput: Cliente | undefined;
}
