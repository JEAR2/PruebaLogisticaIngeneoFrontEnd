import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoProducto } from '../modelos/Entidades/tipoProducto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
    tipoProductoURL = 'http://localhost:8080/logistica/tipo-producto/';
    constructor(private httpClient: HttpClient) {
     }
  
    public lista(): Observable<TipoProducto[]> {
      return this.httpClient.get<TipoProducto[]>(this.tipoProductoURL + 'todos');
    }
  
    public detail(id: number): Observable<TipoProducto> {
      return this.httpClient.get<TipoProducto>(this.tipoProductoURL + `obtener/${id}`);
    }
  
    public save(tipoProducto: TipoProducto): Observable<any> {
      return this.httpClient.post<any>(this.tipoProductoURL + 'guardar', tipoProducto);
    }
  
    public update(id: number, tipoProducto: TipoProducto): Observable<any> {
      return this.httpClient.put<any>(this.tipoProductoURL + `actualizar/${id}`, tipoProducto);
    }
  
    public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(this.tipoProductoURL + `eliminar/${id}`);
    }
  }
  