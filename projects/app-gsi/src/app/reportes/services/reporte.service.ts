import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  url = 'api/reportes';
  constructor(private http: HttpClient) {}

  cargarClientes(): Observable<any> {
    return this.http.get(this.url);
  }
}
