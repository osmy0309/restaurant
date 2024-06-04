import { changeNamePropertyDishes } from "../utils/helpers/arrayUtils";
import Axios from "./Axios";
interface paramsGetAll {
  id_espacio?:number
}
export const getAllDishesApi = async (params:paramsGetAll) => {  
   try {
    const response = await Axios.post(
      `/plato/listar`,params
    );
    return changeNamePropertyDishes(response.data.data)
   } catch (error) {
    console.error(error)
   }
  };

  export const getAllChefSuggestionsApi = async (params={}) => {  
    try {
      const response = await Axios.post(
        `plato/listar-sugerencia-chef`,params
      );
      return changeNamePropertyDishes(response.data.data)
    } catch (error) {
      console.error(error)
    }
  };