export interface ServiceApiDTO {
  id: number,
  nombreCorto:string;
  nombreLargo:string;
  orden:number;
  activo:boolean;
  telefonoAuspiciador:string;
  cantidadParticipantes:number;
  locacion:string;
  gestionarBuffet:boolean;
  ambientacion:boolean;
  cantidadPlantosPersonas:number;
  cantidadTragosPersonas:number;
  publico:boolean;
  descripcion:string;
  imagenPortada:string;
  imagenDetallada:string;
  idTipoServicio:number;
  nombreTipoServicio:string;
  secciones:seccionesApiDTO[];
}
export interface ServiceDTO {
  id: number,
  chortName:string,
  largeName:string,
  order: number;
  active: boolean;
  phone: string;
  pax: number;
  location: string;
  buffet: boolean;
  animation: boolean;
  dishePerPerson: number;
  drinkPerPerson: number;
  public: boolean;
  description: string;
  coverImage: string;
  detailedImage: string;
  idTypeService: number;
  nameTypeService: string;
  sections:sectionsDTO[];
}

 export interface seccionesApiDTO{
  nombre:string;
  descripcion:string;
  imagen:string;
}

export interface sectionsDTO{
  name:string;
  description:string;
  image:string;
}

