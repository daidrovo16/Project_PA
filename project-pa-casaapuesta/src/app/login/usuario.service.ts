import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://127.0.0.1:80/conexionAngular/';

  constructor(private http: HttpClient) { }

  agregar(login: {
    id_log: null;
    username_log: null;
    password_log: null;
   }) {
    return this.http.post(`${this.url}agregar.php`, JSON.stringify(login));
  }

}
