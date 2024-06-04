import { DishApiDTO, DishDTO } from "../../shared/dtos/dishesDTO";
import { ServiceApiDTO, ServiceDTO } from "../../shared/dtos/servicesDTO";
import { dataFollowUsApi, dataListgApi } from "../../shared/dtos/settingsDTO";

const changeNamePropertyBooking = (data: dataListgApi[]) => {
  return data.map(d => {
    return {
      name: d.nombre,
      url: d.enlace
    }
  })
};

const extractPropertyFollow = (data: dataFollowUsApi[]) => {
  return data.map(d => {
    return {
      name: d.nombreCorto,
      networks: d.redesSociales.map(r => {
        return {
          name: r.nombre,
          value: r.enlace
        }
      })
    }
  })
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

export { 
  changeNamePropertyBooking,
   extractPropertyFollow, 
   changeNamePropertyServices ,
   changeNamePropertyDishes
  };
