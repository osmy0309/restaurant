import { DishApiDTO, DishDTO } from "../../shared/dtos/dishesDTO";
import { ServiceApiDTO, ServiceDTO } from "../../shared/dtos/servicesDTO";
import { SocialNetworkData, dataListgApi } from "../../shared/dtos/settingsDTO";
import { SpaceApiDTO, SpaceDTO } from "../../shared/dtos/spacesDTO";

const changeNamePropertyBooking = (data: dataListgApi[]) => {
  return data.map(d => {
    return {
      name: d.nombre,
      url: d.enlace
    }
  })
};

const changeNameNetworkList = (data:dataListgApi[]):SocialNetworkData[] =>{
  return data.map(r => {
    return {
      name: r.nombre,
      value: r.enlace
    }
  })
}

const extractPropertyFollow = (data: SpaceDTO[] | undefined) => {
  return data ? data.map(d => {
    return {
      name: d.chortName,
      networks: d.networks.map(r => {
        return {
          name: r.name,
          value: r.value
        }
      })
    }
  }):undefined
};

const changeNamePropertyServices = (data: ServiceApiDTO[]):ServiceDTO[] => {
  return data.map(d => ({
    id: d.id,
  chortName:d.nombreCorto,
  largeName:d.nombreLargo,
  order: d.orden,
  active: d.activo,
  phone: d.telefonoAuspiciador,
  pax: d.cantidadParticipantes,
  location: d.locacion,
  buffet: d.gestionarBuffet,
  animation: d.ambientacion,
  dishePerPerson: d.cantidadPlantosPersonas,
  drinkPerPerson: d.cantidadTragosPersonas,
  public: d.publico,
  description: d.descripcion,
  coverImage: d.imagenPortada,
  detailedImage: d.imagenDetalladas,
  idTypeService: d.idTipoServicio,
  nameTypeService: d.nombreTipoServicio
  }))
};

const changeNamePropertyDishes = (data: DishApiDTO[]):DishDTO[] => {
  return data.map(d => ({
    id: d.id,
    name:d.nombre,
    chortNameSpace:d.nombreCortoEspacio,
    idSpace:d.idEspacio,
    price:d.precio,
    active:d.activo,
    public:d.publico,
    chefSuggestion:d.sugerenciaChef,
    description:d.descripcion,
    image:d.imagen
  }))
};

const changeNamePropertySpaces = (data: SpaceApiDTO[]):SpaceDTO[] => {
  return data.map(d => ({
    id:d.id,
    chortName:d.nombreCorto,
    largeName:d.nombreLargo,
    order:d.orden,
    active:d.activo,
    public:d.publico,
    pax:d.cantidadMesa,
    description:d.descripcion,
    coverImage: d.imagenPortada,
    detailedImage: d.imagenDetallada,
    networks:changeNameNetworkList(d.redesSociales),
    category:d.categoria,
  }))
};



export { 
  changeNamePropertyBooking,
   extractPropertyFollow, 
   changeNamePropertyServices,
   changeNamePropertyDishes,
   changeNamePropertySpaces
  };
