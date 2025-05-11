import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarifa } from '../models/tarifa.model';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  private urlApi = environment.apiUrl + 'Tarifa';

  constructor(private _http: HttpClient) { }

  getCeldas(): Observable<Tarifa[]> {
    return this._http.get<Tarifa[]>(this.urlApi);
  }
}
