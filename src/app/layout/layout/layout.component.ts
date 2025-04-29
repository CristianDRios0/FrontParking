import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor() {
    console.log('🔵 LayoutComponent CARGADO');
  }

  ngOnInit(): void {
    console.log('🟢 LayoutComponent INICIALIZADO');
  }

}
