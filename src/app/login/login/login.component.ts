import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginRequest } from '../../models/login-request.models';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginRequest: LoginRequest = {
    email: '',
    password: ''
  }

  constructor(private _loginService: LoginService, private router: Router) {}

  login() {
    this._loginService.login(this.loginRequest).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/home/listar-celdas']);
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          html: 'Credeciales invalidas. <br> Por favor valide e intente nuevamente',
        })
      }
    })
  }

}
