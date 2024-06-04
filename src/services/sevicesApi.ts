import { changeNamePropertyServices } from "../utils/helpers/arrayUtils";
import Axios from "./Axios";
interface paramsGetAll {
  idTipoServicio?:number;
}
export const getAllServicesApi = async (params:paramsGetAll) => {
    try {
      const response =  await Axios.post(
        `/servicio/listar`,params
      );    
      return changeNamePropertyServices(response?.data?.data);
    } catch (error) {
      console.error(error)
    }
  };