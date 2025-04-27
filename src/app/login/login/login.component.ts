import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginRequest } from '../../models/login-request.models';

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

  constructor(private _loginService: LoginService) {}

  login() {
    this._loginService.login(this.loginRequest).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
