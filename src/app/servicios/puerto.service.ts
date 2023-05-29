import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Puerto } from '../modelos/Entidades/puerto';

@Injectable({
  providedIn: 'root'
})
export class PuertoService {
  puertoURL = 'http://localhost:8080/logistica/puerto/';
  constructor(private httpClient: HttpClient) {
   }

  public lista(): Observable<Puerto[]> {
    return this.httpClient.get<Puerto[]>(this.puertoURL + 'todos');
  }

  public detail(id: number): Observable<Puerto> {
    return this.httpClient.get<Puerto>(this.puertoURL + `obtener/${id}`);
  }

  public save(puerto: Puerto): Observable<any> {
    return this.httpClient.post<any>(this.puertoURL + 'guardar', puerto);
  }

  public update(id: number, puerto: Puerto): Observable<any> {
    return this.httpClient.put<any>(this.puertoURL + `actualizar/${id}`, puerto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.puertoURL + `eliminar/${id}`);
  }
}
