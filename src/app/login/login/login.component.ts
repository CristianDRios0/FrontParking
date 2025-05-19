import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginRequest } from '../../models/login-request.models';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(private _loginService: LoginService, private router: Router, private _authService: AuthService) {}

  login() {
    this._loginService.login(this.loginRequest).subscribe({
      next: (response) => {
        this._authService.login(response.token);
        this.router.navigate(['/home/listar-celdas']);
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          html: 'Credeciales invalidas. <br> Por favor valide e intente nuevamente',
        })
      }
    })
  }

}
