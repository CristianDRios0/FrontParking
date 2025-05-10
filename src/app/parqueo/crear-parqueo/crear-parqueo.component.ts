import { Component, Input } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo.model';
import { Celda } from '../../models/celda.model';
import { Tarifa } from '../../models/tarifa.model';

@Component({
  selector: 'app-crear-parqueo',
  standalone: false,
  templateUrl: './crear-parqueo.component.html',
  styleUrl: './crear-parqueo.component.css'
})
export class CrearParqueoComponent {

  ngOnInit(){
    console.log(this.celdaParqueoInput);
  }

  @Input() celdaParqueoInput: Celda | undefined; // variable para recibir los datos desde el componente listar celdas sobre la celda en donde se va a parquear

  vehiculoSeleccionado: Vehiculo | null = null; //Variable para el bindeo de datos del vehiculo seleccionado para parquear
  tarifaSeleccionada: Tarifa | null = null; //Variable para el bindeo de datos de la tarifa seleccionada para parquear

  vehiculos: Vehiculo[] = [
    new Vehiculo('ABC123', 1, 1),
    new Vehiculo('DEF456', 2, 2),
  ]

  tarifas: Tarifa[] = [
    new Tarifa('hora', 'moto', 2500, 1, new Date()),
    new Tarifa('hora', 'automovil', 5000, 2, new Date())
  ]

  parquear(){
    console.log(this.vehiculoSeleccionado);
    console.log(this.tarifaSeleccionada);
    (document.activeElement as HTMLElement).blur(); // cambia el foco del elemento boton para que el momento de cerrar la modal no quede el foco en este
  }
}
