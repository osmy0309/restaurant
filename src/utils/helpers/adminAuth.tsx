import { Navigate, Outlet } from "react-router-dom";

const HandleLoginHelper =(token:string|null)=>{
  return token ? true : false;
}
const AdminAuth = () => {
  let isValidLogin = false;
  if (localStorage.getItem("token"))
    isValidLogin = HandleLoginHelper(localStorage.getItem("token"));

  return isValidLogin ? <Outlet /> : <Navigate replace to="/login" />;
};

export default AdminAuth;
