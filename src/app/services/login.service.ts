import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginRequest } from '../models/login-request.models';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = environment.apiUrl + 'Auth/login';

  constructor(private _http: HttpClient) { }

  login(request: LoginRequest): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(this.urlApi, request)
  }
}
