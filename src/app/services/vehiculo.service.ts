import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private urlApi = environment.apiUrl + 'Vehiculo';

  constructor(private _http: HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]> {
    return this._http.get<Vehiculo[]>(this.urlApi);
  }

  getVehiculoById(id: number): Observable<Vehiculo>{
    return this._http.get<Vehiculo>(`${this.urlApi}/${id}`)
  }

  postVehiculo(vehiculo: Vehiculo): Observable<any>{
    return this._http.post(this.urlApi, vehiculo);
  }
}
