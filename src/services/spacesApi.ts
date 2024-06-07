import { changeNamePropertySpaces } from "../utils/helpers/arrayUtils";
import Axios from "./Axios";

  interface paramsGetAll {
    public?:boolean;
  }
  export const getAllSpacesApi = async (params:paramsGetAll) => {
      try {
        const response =  await Axios.post(
          `/service/espacio/listar`,params
        );    
        return changeNamePropertySpaces(response?.data?.data);
      } catch (error) {
        console.error(error)
      }
    };