import { Component, ElementRef, Input } from '@angular/core';
import { Celda } from '../../models/celda.model';

@Component({
  selector: 'app-detalle-celda',
  standalone: false,
  templateUrl: './detalle-celda.component.html',
  styleUrl: './detalle-celda.component.css'
})
export class DetalleCeldaComponent {

  @Input() celdaDetalleInput: Celda | undefined; // Variable para recibir los elementos desde el componente padre en la modal de detaller de la celda

}
