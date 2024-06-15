import { ReserveApiDTO, ReserveDTO } from "../shared/dtos/bookingDTO";
import { changeNamePropertyBookings } from "../utils/helpers/arrayUtils";
import Axios from "./Axios";
interface paramsGetAll {
  email?:string
}

export const getAllBookingsApi = async (params:paramsGetAll) => {  
   try {
    const response = await Axios.post(
      `/service/plato/listar`,params
    );
    console.log("Listado de reservas :",response);
    
    return changeNamePropertyBookings(response.data.data)
   } catch (error) {
    console.error(error)
   }
  };

  export const getAvailablePaxByDateApi = async (date:string) => {  
    try {
      const response = await Axios.post(
        `/service/espacio/disponibilidad`,{fecha:date}//"fecha":"2024-07-23"
      );
      console.log("Disponibilidad para el dia :",date,"es :",date);
      
      return response;
    } catch (error) {
      console.error(error)
    }
  };

  export const reserveApi = async (params:ReserveDTO) => {  
    try {
      const data:ReserveApiDTO = {
          nombreCompleto:params.fullName,
          dni:params.dni,
          celular:params.cellphone,
          espacio:params.space,
          cantidadMesa:params.pax,
          email:params.email,
          fechaReservacion:params.date,
          descripcion:params.description,
      }
     const response = await Axios.post(
       `/service/reservar/mesa/crear`,data
     );
     console.log("Reserva realizada :",response);
     
     return response;
    } catch (error) {
     console.error(error)
    }
   };

   export const reserveCancelApi = async (id:string) => {  
    try {
      const response = await Axios.post(
       `/api/reservaciones/mesa/eliminar/${id}`
     );
     console.log("Reserva cancelada :",response);
     return response;
    } catch (error) {
     console.error(error)
    }
   };

   