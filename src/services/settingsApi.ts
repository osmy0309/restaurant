import { SettingsDTO } from "../shared/dtos/settingsDTO";
import { changeNamePropertyBooking, extractPropertyFollow } from "../utils/helpers/arrayUtils";
import Axios from "./Axios";

let settingHomeImages = () => {
  return Axios.post(
    `/portada/listar`
  );
};

let settingHomeFooterAboutUs = () => {
  return Axios.post(
    `/sobre/listar`
  );
};

let settingHomeFooterBooking = () => {
  return Axios.post(
    `/item_reserva/listar`
  );
};

let settingHomeFooterContactData = () => {
  return Axios.post(
    `/datos_contacto/listar`
  );
};

let settingHomeFooterFollowUs = () => {
  return Axios.post(
    `/espacio/listar`
  );
};

let promiseExecution = async () => {
 try {
  let promise = await Promise.all([
    settingHomeImages(),
    settingHomeFooterAboutUs(),
    settingHomeFooterBooking(),
    settingHomeFooterContactData(),
    settingHomeFooterFollowUs(),
  ]);
  const data:SettingsDTO ={};
  data.homeImages = promise[0].data.data[0]
  const {imagen,imagen2,imagen3,imagen4} = promise[0].data.data[0];
  const {nombre,descripcion} = promise[1].data.data[0];
  const booking = changeNamePropertyBooking(promise[2].data.data) ;
  const {telefonoCelular,correo,telefono} = promise[3].data.data[0];
  const follow = extractPropertyFollow(promise[4].data.data) ;
  data.homeImages = [imagen,imagen2,imagen3,imagen4];
  data.footer = {};
  data.footer.aboutUs = {
    name:nombre,
    description:descripcion
  }
  data.footer.booking = booking;
  data.footer.contactData = {
    cellphone:telefonoCelular,
    phone:telefono,
    email:correo
  }
  data.footer.followUs = follow;
  

  console.log(promise);
  console.log(data);
  return data;
 } catch (error) {
  console.error(error);  
 }
};

export default promiseExecution;