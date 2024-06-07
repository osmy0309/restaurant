import Axios from "./Axios";
export interface contactParams {
  name?: string;
  email: string;
  message: string;
}
export const contactUsApi = async ({ name, email, message }: contactParams) => {
  return await Axios.post(
    `service/contactenos/crear`, { nombre: name, correo: email, mensaje: message }
  );
};