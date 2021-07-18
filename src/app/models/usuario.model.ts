
export class Usuario {

    constructor(
        id: string,
        first_name: string,
        last_name: string,
        avatar: string,
    ) { }
}

export interface UsuarioInterface {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
}