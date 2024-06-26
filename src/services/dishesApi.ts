import { changeNamePropertyDishes } from "../utils/helpers/arrayUtils";
import Axios from "./Axios";
interface paramsGetAll {
  id_espacio?:number
}
export const getAllDishesApi = async (params:paramsGetAll) => {  
   try {
    const response = await Axios.post(
      `/service/plato/listar`,params
    );
    return changeNamePropertyDishes(response.data.data)
   } catch (error) {
    console.error(error)
   }
  };

  export const getAllChefSuggestionsApi = async () => {  
    try {
      const response = await Axios.post(
        `/service/plato/listar-sugerencia-chef`
      );
      return changeNamePropertyDishes(response.data.data)
    } catch (error) {
      console.error(error)
    }
  };