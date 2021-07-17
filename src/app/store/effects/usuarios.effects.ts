import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService,
    ) { }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ),
            // tap( data => console.log('Effect tap', data) ),
            mergeMap(
                () => this.usuarioService.getUsers()
                    .pipe(
                        // tap( data => console.log('RESPONSE', data) ),
                        map( users => usuariosActions.cargarUsuariosSuccess({ usuarios: users.data }) ),
                        catchError( err => of(usuariosActions.cargarUsuariosError({ payload: err })) )
                    )
            )
        )
    );

}