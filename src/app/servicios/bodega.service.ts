import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodega } from '../modelos/Entidades/bodega';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {
  bodegaURL = 'http://localhost:8080/logistica/bodega/';
  constructor(private httpClient: HttpClient) {
   }

  public lista(): Observable<Bodega[]> {
    return this.httpClient.get<Bodega[]>(this.bodegaURL + 'todas');
  }

  public detail(id: number): Observable<Bodega> {
    return this.httpClient.get<Bodega>(this.bodegaURL + `obtener/${id}`);
  }

  public save(bodega: Bodega): Observable<any> {
    return this.httpClient.post<any>(this.bodegaURL + 'guardar', bodega);
  }

  public update(id: number, bodega: Bodega): Observable<any> {
    return this.httpClient.put<any>(this.bodegaURL + `actualizar/${id}`, bodega);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.bodegaURL + `eliminar/${id}`);
  }
}
