import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parqueo } from '../models/parqueo.model';

@Injectable({
  providedIn: 'root'
})
export class ParqueoService {

  private urlApi = environment.apiUrl + 'Parqueo'

  constructor(private _http: HttpClient) { }

  getParqueos(): Observable<Parqueo[]> {
    return this._http.get<Parqueo[]>(this.urlApi);
  }

  getParqueoByCeldaId(celdaId: number): Observable<Parqueo>{
    return this._http.get<Parqueo>(`${this.urlApi}/celda/${celdaId}`);
  }

  postParqueo(parqueo: Parqueo): Observable<any>{
    return this._http.post<any>(this.urlApi,parqueo);
  }
}
