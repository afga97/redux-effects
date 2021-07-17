import { createAction, props } from '@ngrx/store';
import { UsuarioInterface } from '../../models/usuario.model';

export const cargarUsuarios = createAction(
    '[Usuarios] Cargar Usuarios'
);

export const cargarUsuariosSuccess = createAction(
    '[Usuarios] Cargar Usuarios Success',
    props<{ usuarios: UsuarioInterface[] }>()
);

export const cargarUsuariosError = createAction(
    '[Usuarios] Cargar Usuarios Error',
    props<{ payload: any }>()
);