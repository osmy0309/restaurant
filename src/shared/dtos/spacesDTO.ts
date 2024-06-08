import { SocialNetworkData, dataListgApi } from "./settingsDTO";

export interface SpaceApiDTO {
  id: number;
  nombreCorto: string;
  nombreLargo: string;
  categoria: string;
  orden: number;
  activo: boolean;
  publico: boolean;
  cantidadMesa: number;
  descripcion: string;
  imagenPortada: string;
  imagenDetallada: string;
  imagenMovil: string;
  imagenBanner: string;
  redesSociales: dataListgApi[];
  comentarios:commetsApiDTO[];
}
export interface SpaceDTO {
  id: number;
  chortName: string;
  largeName: string;
  order: number;
  active: boolean;
  public: boolean;
  pax: number;
  description: string;
  coverImage: string;
  detailedImage: string;
  movilImage:string;
  bannerImage:string;
  networks: SocialNetworkData[]
  category: string;
  comments:commetsDTO[]
}

export interface commetsApiDTO {
  nombre: string;
  evaluacion: number;
  imagen: string;
  creado: string | Date;
  comentario:string;
}

export interface commetsDTO {
  name: string;
  rating: number;
  image: string;
  createAt: string | Date;
  comment:string;
}

