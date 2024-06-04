export interface DishApiDTO {
  id: number;
  nombre:string;
  nombreCortoEspacio:string;
  idEspacio:number;
  precio:string;
  activo:boolean;
  publico:boolean;
  sugerenciaChef:boolean;
  descripcion:string;
  imagen:string;
}
export interface DishDTO {
  id:number;
  name:string;
  chortNameSpace:string;
  idSpace:number;
  price:string;
  active:boolean;
  public:boolean;
  chefSuggestion:boolean;
  description:string;
  image:string;
}

