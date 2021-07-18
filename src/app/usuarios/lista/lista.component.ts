import { Component, OnInit } from '@angular/core';
// import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioInterface } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: UsuarioInterface[] = [];
  loading: boolean = false;
  error: any;

  constructor(
    private store: Store<AppState>
    // private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    })

    this.store.dispatch( cargarUsuarios() )

    // this.usuarioService.getUsers()
    //   .subscribe( (data) => {
    //     this.usuarios = data.data;
    //   })
  }

}
