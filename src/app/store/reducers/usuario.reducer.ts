import { createReducer, on } from '@ngrx/store';
import { UsuarioInterface } from '../../models/usuario.model';
import { cargarUsuario, 
  cargarUsuarioSuccess, cargarUsuarioError 
} from '../actions/usuario.actions';

export interface UsuarioState {
  id: string,
  user: UsuarioInterface,
  loaded: boolean,
  loading: boolean,
  error: any
};

let userNull: UsuarioInterface = {
  id: '',
  first_name: '',
  last_name: '',
  avatar: '',
}

const usuarioInitialState: UsuarioState = {
  id: '',
  user: userNull,
  loaded: false,
  loading: false,
  error: null
};

const _usuarioReducer = createReducer(
  usuarioInitialState,
  on(cargarUsuario, (state, { id }) => ({ ...state, loading: true, id })),
  on(cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...usuario }
  })),
  on(cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    }
  })),
);

export function usuarioReducer(state: any, action: any) {
  return _usuarioReducer(state, action)
}
