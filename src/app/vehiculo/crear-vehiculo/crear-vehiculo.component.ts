import { Component } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo.model';
import { VehiculoService } from '../../services/vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-vehiculo',
  standalone: false,
  templateUrl: './crear-vehiculo.component.html',
  styleUrl: './crear-vehiculo.component.css'
})
export class CrearVehiculoComponent {

  constructor(private _vehiculoService: VehiculoService) {

  }

  vehiculoSeleccionado: Vehiculo = new Vehiculo('');

  crearVehiculo() {
    console.log(this.vehiculoSeleccionado.placa);
    this._vehiculoService.postVehiculo(this.vehiculoSeleccionado).subscribe({
      next: (rs) => {
        this.vehiculoSeleccionado = new Vehiculo('');
        (document.activeElement as HTMLElement).blur(); // cambia el foco del elemento boton para que el momento de cerrar la modal no quede el foco en este
        Swal.fire({
          icon: 'success',
          html: 'Vehiculo creado exitosamente'
        })
      },
      error: (e) => {
        Swal.fire({
          icon: 'error',
          html: 'Error al crear el vehiculo'
        })
      }
    })
  }

}
