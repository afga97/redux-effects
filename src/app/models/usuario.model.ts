
export class Usuario {

    constructor(
        id: number,
        first_name: string,
        last_name: string,
        avatar: string,
    ) { }
}

export interface UsuarioInterface {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}