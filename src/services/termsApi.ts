import Axios from "./Axios";

export const getAllTermsApi = async () => {  
    return await Axios.post(
      `/service/terminos_condiciones/listar`
    );
  };