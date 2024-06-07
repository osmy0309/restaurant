import { FormEvent, useState } from "react";
import TextField from "../form/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../features/auth/authSlice";
import { notification } from "antd";

function FormLogin() {
	const { type } = useParams();
	const navigate = useNavigate();
	let loading = useSelector((state: RootState) => state.auth.loading);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const dispatch = useDispatch<AppDispatch>();
	const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		if (email != "" && password != "") {
			const credentials = { email, password }
			const response =await dispatch(type == 'login' ? loginUser(credentials) : registerUser(credentials));
			if(response){
				navigate('/');
			}			
		} else {
			//Tratamiento de error
			notification.error({
				message: `Revise los datos`,
				description: 'El usuario o contraseña son incorrectos',
				placement: "bottom",
			});
		}

	};

	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white z-10">
				<div className="flex space-x-4 justify-items-center items-center   pb-[1rem]">
					<p className="font-Sail_Regular text-[40px] flex text-[#1F0B01] ">{type == "login" ? "Bienvenido" : "Crea una cuenta"}</p>
				</div>

				<div className="w-100 min-h-[100px]">
					<form onSubmit={onSubmit} className="w-100 flex flex-col gap-[1rem] pb-[1rem] items-center">
						<TextField required={true} name="email" placeholder="Correo" label="Correo" type="email" value={email} onChange={(value) => setEmail(value)} />
						<TextField
							required={true}
							name="password"
							placeholder="Contraseña"
							label="Contraseña"
							type="password"
							value={password}
							onChange={(value) => setPassword(value)}
						/>

						<button
							disabled={loading}
							type="submit"
							className={`${loading && 'animate-spin'} w-100 rounded-[5px] flex justify-center items-center bg-[#E38A5D] h-[3rem] p-2 px-8 tracking-[5%] leading-[16px]  hover:cursor-pointer hover:bg-[#e4743c] transition-colors duration-300`}
						>
							{" "}
							<p className="text-white text-[16px] font-bold font-Roboto">{type == "login" ? "Entrar" : "Registrarme"}</p>
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default FormLogin;
