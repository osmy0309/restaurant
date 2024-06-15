import { notification } from "antd";
import axios from "axios";
import LoginDTO from "../shared/dtos/loginDTO";
import Axios from "./Axios";

export const adminLoginApi = async () => {  
  const email = import.meta.env.VITE_ADMIN_EMAIL;
  const password = import.meta.env.VITE_ADMIN_PASSWORD;
  const result = await axios
    .post(`/api/login_check`, {email,password})
    .then((response: any) => {
      localStorage.setItem("token-admin", response.token);
      return response;
    })
    .catch((error: any) => {
      notification.error({
        message: `Error ${error.response.status}`,
        description:
          error.response.status === 400
            ? "El usuario o contraseña son incorrectos"
            : "Error en el servidor",
        placement: "bottom",
      });
    });

  return result;
};

export const LoginApi = async (credentials: LoginDTO) => { 
  try {
    return await Axios.post(
      `service/autenticar`,credentials
    );
  } catch (error) {
    console.error(error)
  }
};

export const registerApi = async (credentials: LoginDTO) => {  
  try {
    return await Axios.post(
      `/service/perfil/crear`,credentials
    );
  } catch (error) {
    console.error(error)
  }
};

export const changePasswordApi = async (credentials: LoginDTO) => {  
  try {
    return await Axios.post(
      `/api/perfil/cambiar_clave`,credentials
    );
  } catch (error) {
    console.error(error)
  }
};

