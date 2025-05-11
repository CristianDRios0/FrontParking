import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Celda } from '../../models/celda.model';
import { CeldaService } from '../../services/celda.service';

@Component({
  selector: 'app-crear-celda',
  standalone: false,
  templateUrl: './crear-celda.component.html',
  styleUrl: './crear-celda.component.css'
})
export class CrearCeldaComponent {

  constructor(private _celdaService: CeldaService) {}

  @Input() celdaInput: Celda | undefined; // variable para recibir los datos desde el componente padre
  @Output() celdaCreada = new EventEmitter<void>()

    //Metodo para crear la celda
  crearCelda() {
    console.log(`ingreso al crear celda y estos son los datos a enviar al servicio ${this.celdaInput!.codigo} ${this.celdaInput!.estado} ${this.celdaInput!.tipo}`)
    this._celdaService.postCelda(this.celdaInput!).subscribe({
      next: (rs) => {
        console.log('celda creada exitosamente', rs)
        this.celdaInput = new Celda('', '', '');
        (document.activeElement as HTMLElement).blur(); // cambia el foco del elemento boton para que el momento de cerrar la modal no quede el foco en este
        this.celdaCreada.emit();
      },
      error: (e) => {
        console.log('error al crear la celda', e)
      }
    })
  }
}
