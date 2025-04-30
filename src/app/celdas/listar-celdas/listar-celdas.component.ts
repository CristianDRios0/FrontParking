import { Component } from '@angular/core';
import { Celda } from '../../models/celda.model';

@Component({
  selector: 'app-listar-celdas',
  standalone: false,
  templateUrl: './listar-celdas.component.html',
  styleUrl: './listar-celdas.component.css'
})
export class ListarCeldasComponent {

  celdas: Celda[] = [
    new Celda(1, 'A10', 'automovil', 'libre'),
    new Celda(2, 'A20', 'moto', 'ocupado'),
    new Celda(3, 'A30', 'automovil', 'ocupado')
  ]
}
