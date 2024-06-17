import ContainerLayout from "../../component/layout/containerLayout";
import TextField from "../../component/form/TextField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { changePasswordApi } from "../../services/authApi";
import { notification } from "antd";
import { checkPasswordUser } from "../../features/auth/authSlice";

const DataPerfilPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const dispatch = useDispatch<AppDispatch>();
	let auth = useSelector((state: RootState) => state.auth.data);
	const [actualpass, setActualPass] = useState<string>();
	const [newpass, setNewpass] = useState<string>();
	const [newpassagain, setNewPassAgain] = useState<string>();
	const [isValid,setIsValid] = useState<boolean>(false);
	const [loading,setLoading] = useState<boolean>(false);
	const handleChange =async () =>{
		try {
			setLoading(true)
			const check =await dispatch(checkPasswordUser({email:auth?.email || "",password:actualpass || ""}))	
			if(check ){
				changePasswordApi({email:auth?.email || "",password:newpass||""});
				setLoading(false)
			notification.success({
				message: `Contraseña cambiada`,
				description: 'Se ha cambiado su contraseña correctamente',
				placement: "bottom",
			  });
			} else {
				setLoading(false)
			}
			
		} catch (error) {
			setLoading(false)
			notification.error({
				message: `Ha ocurrido un error`,
				description: 'No se ha podido cambiar la contraseña',
				placement: "bottom",
			  });
		}
	}

	useEffect(()=>{
		actualpass && newpass == newpassagain ? setIsValid(true):setIsValid(false)
	},[actualpass,newpass,newpassagain])
	return (
		<>
			<ContainerLayout banner={false} key={`page-bookings`}>
				<div className="flex flex-col items-center justify-center  pt-[5rem] pb-5  z-10 bg-[#F1F1F1]">
					<div className="text-[64px] font-Sail_Regular">Editar perfil</div>
					<div className="!w-[50%] flex flex-col pl-[1rem] h-auto bg-white pb-[3rem] gap-2 rounded-[8px] ">
						<p className="flex font-Sail_Regular text-[40px]">Datos del perfil</p>
						<TextField disabled value={auth?.email} onChange={() => {}} type="text" styleClass="w-[60%] bg-white pl-[0.5rem]  " />
						<p className="flex font-Sail_Regular text-[40px]">Cambiar contraseña</p>
						<TextField
							label="Contraseña actual"
							styleClassLabel="!font-Sail_Regular !text-[20px]"
							placeholder="Contraseña actual"
							value={actualpass}
							onChange={setActualPass}
							type="password"
							styleClass="w-[60%] bg-white  font-Sail_Regular placeholder-[#919EAB]"
						/>
						<TextField
							label="Nueva contraseña"
							styleClassLabel="!font-Sail_Regular !text-[20px]"
							value={newpass}
							onChange={setNewpass}
							type="password"
							placeholder="Nueva contraseña"
							styleClass="w-[60%] bg-white  font-Sail_Regular placeholder-[#919EAB]"
						/>
						<TextField
							label="Confirmar nueva contraseña"
							styleClassLabel="!font-Sail_Regular !text-[20px]"
							value={newpassagain}
							onChange={setNewPassAgain}
							type="password"
							placeholder="Confirmar nueva contraseña"
							styleClass="w-[60%] bg-white  font-Sail_Regular placeholder-[#919EAB]"
						/>
						<button
							disabled={!isValid || loading}
							onClick={() => handleChange()}
							className={`mt-[2rem] w-[40%] hover:cursor-pointer text-[16px] border border-black text-white font-Roboto_Bold rounded-[8px] px-5 py-3 flex items-center justify-center text-center ${isValid && !loading ? 'bg-[#E38A5D] hover:bg-[#e4743c]' : 'bg-[#808080]'}`}
						>
							Guardar cambios
						</button>
					</div>
				</div>
			</ContainerLayout>
		</>
	);
};
export default DataPerfilPage;
