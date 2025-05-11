import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlApi = environment.apiUrl + 'Cliente';

  constructor(private _http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this._http.get<Cliente[]>(this.urlApi);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this._http.get<Cliente>(`${this.urlApi}/${id}`)
  }
}
