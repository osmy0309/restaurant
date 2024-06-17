import { ReserveApiDTO, ReserveDTO } from "../../shared/dtos/bookingDTO";
import { DishApiDTO, DishDTO } from "../../shared/dtos/dishesDTO";
import { ServiceApiDTO, ServiceDTO, seccionesApiDTO, sectionsDTO } from "../../shared/dtos/servicesDTO";
import { SocialNetworkData, dataListgApi } from "../../shared/dtos/settingsDTO";
import { SpaceApiDTO, SpaceDTO, commetsApiDTO, commetsDTO } from "../../shared/dtos/spacesDTO";

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

const changeCommentsList = (data:commetsApiDTO[]):commetsDTO[] =>{
  return data.map(r => {
    return {
      name: r.nombre,
      image: r.imagen,
      rating:r.evaluacion,
      createAt:r.creado,
      comment:r.comentario,
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

const changeNameSectionsList = (data:seccionesApiDTO[]):sectionsDTO[] =>{
  return data.map(r => {
    return {
      name: r.nombre,
      description: r.descripcion,
      image:r.imagen
    }
  })
}

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
  detailedImage: d.imagenDetallada,
  idTypeService: d.idTipoServicio,
  nameTypeService: d.nombreTipoServicio,
  sections:changeNameSectionsList(d.secciones),
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
    bannerImage:d.imagenBanner,
    movilImage:d.imagenMovil,
    comments:changeCommentsList(d.comentarios),
  }))
};

const changeNamePropertyBookings = (data: ReserveApiDTO[]):ReserveDTO[] => {
  return data.map(d => ({
    id: d.id,
    fullName:d.nombreCompleto,
    dni:d.dni,
    cellphone:d.celular,
    space:d.espacio,
    pax:d.cantidadMesa,
    email:d.email,
    date:d.fechaReservacion,
    description:d.descripcion,
    schedule:d.horaInicio,
    status:d.estado,
    spaceName:d.nombreCorteEspacio
    }))
};

const changeNamePropertyReserve = (params: ReserveDTO):ReserveApiDTO => {
  return {
      nombreCompleto:params.fullName,
      dni:params.dni,
      celular:params.cellphone,
      espacio:params.space,
      cantidadMesa:params.pax,
      email:params.email,
      fechaReservacion:params.date,
      descripcion:params.description
  }
};





export { 
  changeNamePropertyBooking,
   extractPropertyFollow, 
   changeNamePropertyServices,
   changeNamePropertyDishes,
   changeNamePropertySpaces,
   changeNamePropertyReserve,
   changeNamePropertyBookings
  };
