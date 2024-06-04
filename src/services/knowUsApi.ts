import Axios from "./Axios";
export const getknowUsApi = async ({params={}}) => {  
    return await Axios.post(
      `/conocenos/listar`,params
    );
  };