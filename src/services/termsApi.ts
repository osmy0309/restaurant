import Axios from "./Axios";

export const getTermsApi = async ({params={}}) => {  
    return await Axios.post(
      `/terminos_condiciones/listar`,params
    );
  };