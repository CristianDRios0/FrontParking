import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celda } from '../models/celda.model';

@Injectable({
  providedIn: 'root'
})
export class CeldaService {

  private urlApi = environment.apiUrl + 'Celda';

  constructor(private _http: HttpClient) { }

  getCeldas(): Observable<Celda[]>{
    return this._http.get<Celda[]>(this.urlApi);
  }

  postCelda(celda: Celda): Observable<any>{
    return this._http.post<any>(this.urlApi, celda)
  }

}
