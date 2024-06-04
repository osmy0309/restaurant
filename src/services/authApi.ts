import { notification } from "antd";
import axios from "axios";
import LoginDTO from "../shared/dtos/loginDTO";

export const adminLogin = async (credentials: LoginDTO) => {
  const url = import.meta.env.VITE_REACT_APP_API_URL;  
  console.log("Credenciales :",credentials);
  
  const result = await axios
    .post(`${url}/api/login_check`, credentials)
    .then((response: any) => {
      localStorage.setItem("token", response.token);
      notification.success({
        message: "Autenticacion exitosa",
        description: "",
        placement: "bottom",
      });
      return response.data;
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
