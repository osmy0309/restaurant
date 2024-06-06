import { useState } from "react";
import FormLogin from "../../component/login/form";
import { useParams } from "react-router-dom";

const Login = ({ init = true }) => {
	const [login, setLogin] = useState(init);
	const { type } = useParams();
	return (
		<>
			<div className="grid grid-flow-col gap-4 h-auto max-h-screen">
				<div className="col-span-4">
					<img className="w-full aspect-square max-h-screen" src={"/images/login/image.jpg"} alt={"Banner"} />
				</div>
				<div className="col-span-4 h-full pt-20 items-center flex flex-col text-[#1F0B01] font-medium max-h-screen">
					<div className="font-Kaushan_Script text-[32px] ">
						Iván<span className="text-[32px] font-Sail_Regular">Chefs Justo</span>
					</div>
					<FormLogin login={login} />
					<div className="font-bold font-Roboto text-[16px] ">
						{type == "login" ? "No tienes cuenta" : "Ya tienes una cuenta"}{" "}
						<a className="text-[16px] font-Roboto text-[#E38A5D] hover:cursor-pointer" onClick={() => setLogin(!login)}>
							{type == "login" ? "registrate aquí" : "entra aqui"}
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
