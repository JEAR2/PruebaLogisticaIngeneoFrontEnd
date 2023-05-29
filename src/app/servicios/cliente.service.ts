import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/Entidades/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clienteURL = 'http://localhost:8080/logistica/cliente/';
  constructor(private httpClient: HttpClient) {
   }

  public lista(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clienteURL + 'todos');
  }

  public detail(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.clienteURL + `obtener/${id}`);
  }

  public save(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(this.clienteURL + 'guardar', cliente);
  }

  public update(id: number, cliente: Cliente): Observable<any> {
    return this.httpClient.put<any>(this.clienteURL + `actualizar/${id}`, cliente);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.clienteURL + `eliminar/${id}`);
  }
}
