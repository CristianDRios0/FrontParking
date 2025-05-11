import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo.model';
import { Celda } from '../../models/celda.model';
import { Tarifa } from '../../models/tarifa.model';
import { Parqueo } from '../../models/parqueo.model';
import { NgForm } from '@angular/forms';
import { ParqueoService } from '../../services/parqueo.service';

@Component({
  selector: 'app-crear-parqueo',
  standalone: false,
  templateUrl: './crear-parqueo.component.html',
  styleUrl: './crear-parqueo.component.css'
})
export class CrearParqueoComponent {

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vehiculoParqueoInput'] && this.vehiculoParqueoInput){
      this.vehiculos = [...this.vehiculoParqueoInput]
    }

    if (changes['tarifasParqueoInput'] && this.tarifasParqueoInput) {
      this.tarifas = [...this.tarifasParqueoInput]
    }

    if (changes['celdaParqueoInput'] && this.celdaParqueoInput) {
      this.celdaSeleccionada = this.celdaParqueoInput;
    }
  }

  constructor(private _parqueoService: ParqueoService){}

  @ViewChild('formParqueo') formParqueo!: NgForm;

  @Input() celdaParqueoInput: Celda | undefined; // variable para recibir los datos desde el componente listar celdas sobre la celda en donde se va a parquear
  @Input() vehiculoParqueoInput: Vehiculo[] | null = null; // variable para recibir del componente padre la lista de vehiculos existentes
  @Input() tarifasParqueoInput: Tarifa[] | null = null; // variable para recibir del componente padre la lista de tarifas existentes
  @Output() crearParqueo = new EventEmitter<void>();

  celdaSeleccionada: Celda | undefined;
  vehiculoSeleccionado: Vehiculo | null = null; //Variable para el bindeo de datos del vehiculo seleccionado para parquear
  tarifaSeleccionada: Tarifa | null = null; //Variable para el bindeo de datos de la tarifa seleccionada para parquear

  vehiculos: Vehiculo[] = [];
  tarifas: Tarifa[] = [];

  parquear(){
    const parqueo = new Parqueo(this.vehiculoSeleccionado!.id!, this.celdaParqueoInput!.id!, this.tarifaSeleccionada!.id!, 'activo', new Date())
    this._parqueoService.postParqueo(parqueo).subscribe({
      next: (rs) => {
        console.log(parqueo)
        console.log(this.celdaSeleccionada);
        console.log(this.vehiculoSeleccionado);
        console.log(this.tarifaSeleccionada);
        this.celdaSeleccionada = undefined;
        this.vehiculoSeleccionado = null;
        this.tarifaSeleccionada = null;
        this.formParqueo.resetForm();
        (document.activeElement as HTMLElement).blur(); // cambia el foco del elemento boton para que el momento de cerrar la modal no quede el foco en este
        this.crearParqueo.emit();
      },
      error: (e) => {
        console.log('No fue posible crear el parqueo', e)
      }
    })
  }
}
