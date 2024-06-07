import { rolesEnum } from "../../utils/enum/roles";

export interface authDTO {
  token: string;
  email:string;
}

export interface userDTO {
  id:number;
  roles:rolesEnum[];
  email:string;
}