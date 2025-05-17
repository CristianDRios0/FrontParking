import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pago } from '../models/pago.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private urlApi = environment.apiUrl + "Pago"

  constructor(private _http: HttpClient) { }

  postPago(pago: Pago): Observable<any> {
    return this._http.post<any>(this.urlApi, pago);
  }

}
