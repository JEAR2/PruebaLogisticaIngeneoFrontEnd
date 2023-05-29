import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogisticaTerrestre } from '../modelos/Entidades/logisticaTerrestre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogisticaTerrestreService {
  terrestreURL = 'http://localhost:8080/logistica/terrestre/';
  constructor(private httpClient: HttpClient) {
   }

  public lista(): Observable<LogisticaTerrestre[]> {
    return this.httpClient.get<LogisticaTerrestre[]>(this.terrestreURL + 'todos');
  }

  public detail(id: number): Observable<LogisticaTerrestre> {
    return this.httpClient.get<LogisticaTerrestre>(this.terrestreURL + `obtener/${id}`);
  }

  public save(logisticaTerrestre: LogisticaTerrestre): Observable<any> {
    return this.httpClient.post<any>(this.terrestreURL + 'guardar', logisticaTerrestre);
  }

  public update(id: number, logisticaTerrestre: LogisticaTerrestre): Observable<any> {
    return this.httpClient.put<any>(this.terrestreURL + `actualizar/${id}`, logisticaTerrestre);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.terrestreURL + `eliminar/${id}`);
  }
}
