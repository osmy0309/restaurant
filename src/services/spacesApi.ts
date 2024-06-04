import Axios from "./Axios";

export const getAllSpacesApi = async ({params={}}) => {  
    return await Axios.post(
      `/espacio/listar`,params
    );
  };