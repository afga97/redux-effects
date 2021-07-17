import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsuarioInterface } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api'

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=6`)
      .pipe(
        map( (response ) => { 
          let datares = (response as { data: UsuarioInterface[] })
          return datares
        })
      )
  }
}
