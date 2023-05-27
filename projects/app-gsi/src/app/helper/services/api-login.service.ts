import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiLoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.get('/api/usuarios', {
      params: {
        username,
        password,
      },
    });
  }
}
