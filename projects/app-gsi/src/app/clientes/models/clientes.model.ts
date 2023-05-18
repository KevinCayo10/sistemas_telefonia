export class Cliente {
  _id?: string;
  nombresCompletos?: string;
  direccion?: string;
  fechaNacimiento?: Date;
  celular?: string;

  constructor(
    nombresCompletos?: string,
    direccion?: string,
    fechaNacimiento?: Date,
    celular?: string
  ) {
    this.nombresCompletos = nombresCompletos;
    this.direccion = direccion;
    this.fechaNacimiento = fechaNacimiento;
    this.celular = celular;
  }
}
