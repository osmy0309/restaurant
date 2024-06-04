export interface SocialNetworkData {
  name:string,
  icon?:string,
  value?:string,
}
interface BookingData {
  name:string;
  url:string;
}

interface FollowUsData {
    name:string;
    networks:SocialNetworkData[];
}
interface FooterData {
  aboutUs?:{
    name:string;
    description:string;
  },
  booking?:BookingData[],
  contactData?:{
    email:string;
    phone:string;
    cellphone:string;
  },
  followUs?:FollowUsData[],
}
export interface SettingsDTO {
  homeImages?: string[];
  footer?:FooterData;
}

export interface dataListgApi {
  nombre:string;
  enlace:string;
}

export interface dataContactApi {
  correo:string;
  telefono:string;
  telefonoCelular:string;
}

export interface dataFollowUsApi {
  nombreCorto:string;
  redesSociales:dataListgApi[];
}
