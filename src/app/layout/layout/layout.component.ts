import { Component, ElementRef, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private _authService: AuthService) {}

  @ViewChild('crearVehiculoModal') crearVehiculoModal!: ElementRef;

  private modal!: Modal;

  ngAfterViewInit() {
    if (this.crearVehiculoModal) {
      this.modal = new Modal(this.crearVehiculoModal.nativeElement);
    }
  }

  abrirModalCrearVehiculo() {
    if (this.modal) {
      this.modal.show();
    }
  }

  logout() {
    this._authService.logout();
    window.location.reload();
  }
}
