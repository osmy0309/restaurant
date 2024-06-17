export interface ReserveApiDTO {
  id?:string;
  email: string;
  fechaReservacion: string;
  cantidadMesa: number;
  descripcion: string;
  espacio: string;
  nombreCompleto: string;
  dni: string;
  celular: string;
  horaInicio?:	string;
  estado?:string;
  nombreCorteEspacio?:string;
}
export interface ReserveDTO {
  id?:string;
  email: string;
  date: string;
  pax: number;
  description: string;
  space: string;
  fullName: string;
  dni: string;
  cellphone: string;
  schedule?:string;
  status?:string;
  spaceName?:string;
}

