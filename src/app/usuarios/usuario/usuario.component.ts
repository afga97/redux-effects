import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { cargarUsuario } from '../../store/actions/usuario.actions';
import { UsuarioInterface } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  
  usuario: UsuarioInterface = { } as UsuarioInterface;
  
  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
    ) { }
    
  ngOnInit(): void {
    this.store.select('usuario').subscribe( ({ user }) => {
      this.usuario = user;
    })

    this.router.params.subscribe( ({ id }) => {
      this.store.dispatch( cargarUsuario({ id }))
    })
  }

}
