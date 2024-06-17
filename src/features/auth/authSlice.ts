import { createSlice } from "@reduxjs/toolkit";
import { authDTO } from "../../shared/dtos/authDTO";
import LoginDTO from "../../shared/dtos/loginDTO";
import { LoginApi, registerApi } from "../../services/authApi";
import { notification } from "antd";

export interface AuthState {
  data: authDTO | null;
  loading: boolean;
  openReserve:boolean;
}

const initialState: AuthState = {
  data: null,
  loading: false,
  openReserve:false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    login: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.email);
      state.data = action.payload;
    },
    logout: (state) => {
      state.data = null;
      localStorage.setItem("token", "");
      localStorage.setItem("email", "");
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOpenReserve:(state,action) =>{
      state.openReserve = action.payload
    }
  },
});

export const {
  setData,
  setLoading,
  login,
  logout,
  setOpenReserve
} = authSlice.actions;
export const selectAuth = (state: any) => state.auth.data;

export const autoLogin =
  () => async (dispatch: any, getState: any) => {
    if (getState().auth.data == null) {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");
      if (token != null && token != "" && email != "" && email != null) {        
        dispatch(setData({ email, token }))
      }
    }
  };

export const loginUser =
  (credentials: LoginDTO) => async (dispatch: any, getState: any) => {
    if (selectAuth(getState()) == null) {
      dispatch(
        setLoading(true)
      );
      const response = await LoginApi(credentials);
      dispatch(
        setLoading(false)
      );
      if (response?.data?.autenticado) {
        dispatch(login({
          token: response.data.token,
          email: credentials.email
        }))
        return response.data;
      } else {
        notification.error({
          message: `Error al autenticarse`,
          description: 'El usuario o contraseña son incorrectos',
          placement: "bottom",
        });
      }


    }
  };

  export const checkPasswordUser =
  (credentials: LoginDTO) => async () => { 
      const response = await LoginApi(credentials);
      if (response?.data?.autenticado) {
        return response.data;
      } else {
        notification.error({
          message: `Error al autenticarse`,
          description: 'El usuario o contraseña son incorrectos',
          placement: "bottom",
        });
      }

  };

export const registerUser =
  (credentials: LoginDTO) => async (dispatch: any, getState: any) => {
    if (selectAuth(getState()) == null) {
      dispatch(
        setLoading(true)
      );
      const response = await registerApi(credentials);
      dispatch(
        setLoading(false)
      );

      if (response?.data?.token) {
        dispatch(
          login({
            token: response.data.token,
            email: credentials.email
          })
        );
        return response.data;
      } else {
        notification.error({
          message: `Error al registar`,
          description: 'No se ha podido registrar el nuevo usuario',
          placement: "bottom",
        });
      }

    }
  };



export default authSlice.reducer;
