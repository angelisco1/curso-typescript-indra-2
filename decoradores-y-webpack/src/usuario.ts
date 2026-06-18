export class Usuario {
  constructor(
    public email: string,
    public password: string,
    public nombre: string,
    public id: number,
  ) { }
}

export type Usuarios = Array<Usuario>