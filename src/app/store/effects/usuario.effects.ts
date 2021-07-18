import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsuarioService } from '../../services/usuario.service';
import * as usuarioActions from '../actions/usuario.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuarioActions.cargarUsuario ),
            mergeMap(
                ( action ) => this.usuarioService.getUserById(action.id)
                    .pipe(
                        map( data => usuarioActions.cargarUsuarioSuccess({ usuario: data.data })),
                        catchError( err =>  of(usuarioActions.cargarUsuarioError({ payload: err }) ))
                    )
            )
        )
    )

}