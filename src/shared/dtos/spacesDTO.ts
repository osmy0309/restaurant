import { SocialNetworkData, dataListgApi } from "./settingsDTO";

export interface SpaceApiDTO {
  id: number;
  nombreCorto:string;
  nombreLargo:string;
  orden:number;
  activo:boolean;
  publico:boolean;
  cantidadMesa:number;
  descripcion:string;
  imagenPortada:string;
  imagenDetallada:string;
  redesSociales:dataListgApi[];
  categoria:string;
}
export interface SpaceDTO {
  id:number;
  chortName:string;
  largeName:string;
  order:number;
  active:boolean;
  public:boolean;
  pax:number;
  description:string;
  coverImage: string;
  detailedImage: string;
  networks:SocialNetworkData[]
  category:string;
}

