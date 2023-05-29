import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogisticaMaritima } from '../modelos/Entidades/logisticaMaritima';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogisticaMaritimaService {
  meritimaURL = 'http://localhost:8080/logistica/maritima/';
  constructor(private httpClient: HttpClient) {
   }

  public lista(): Observable<LogisticaMaritima[]> {
    return this.httpClient.get<LogisticaMaritima[]>(this.meritimaURL + 'todos');
  }

  public detail(id: number): Observable<LogisticaMaritima> {
    return this.httpClient.get<LogisticaMaritima>(this.meritimaURL + `obtener/${id}`);
  }

  public save(logisticaMeritima: LogisticaMaritima): Observable<any> {
    return this.httpClient.post<any>(this.meritimaURL + 'guardar', logisticaMeritima);
  }

  public update(id: number, logisticaMeritima: LogisticaMaritima): Observable<any> {
    return this.httpClient.put<any>(this.meritimaURL + `actualizar/${id}`, logisticaMeritima);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.meritimaURL + `eliminar/${id}`);
  }
}
