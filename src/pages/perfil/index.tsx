import ContainerLayout from "../../component/layout/containerLayout";
import ContactSection from "../../component/banner/ContactSection";
import BookingSection from "../../component/banner/BookingSection";
import TextField from "../../component/form/TextField";
import { useEffect, useState } from "react";

const DataPerfilPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [user, setUser] = useState("oprieto@gmail.com");
	const [actualpass, setActualPass] = useState();
	const [newpass, setNewpass] = useState();
	const [newpassagain, setNewPassAgain] = useState();

	return (
		<>
			<ContainerLayout banner={false} key={`page-bookings`}>
				<div className="flex flex-col items-center justify-center  pt-[5rem] pb-5  z-10 bg-[#F1F1F1]">
					<div className="text-[64px] font-Sail_Regular">Editar perfil</div>
					<div className="!w-[50%] flex flex-col pl-[1rem] h-auto bg-white pb-[3rem] gap-2 rounded-[8px] ">
						<p className="flex font-Sail_Regular text-[40px]">Datos del perfil</p>
						<TextField disabled value={user} onChange={() => setUser} type="text" styleClass="w-[60%] bg-white pl-[0.5rem]  " />
						<p className="flex font-Sail_Regular text-[40px]">Cambiar contraseña</p>
						<TextField
							label="Contraseña actual"
							styleClassLabel="!font-Sail_Regular !text-[20px]"
							placeholder="Contraseña actual"
							value={actualpass}
							onChange={() => setActualPass}
							type="password"
							styleClass="w-[60%] bg-white  font-Sail_Regular placeholder-[#919EAB]"
						/>
						<TextField
							label="Nueva contraseña"
							styleClassLabel="!font-Sail_Regular !text-[20px]"
							value={newpass}
							onChange={() => setNewpass}
							type="password"
							placeholder="Nueva contraseña"
							styleClass="w-[60%] bg-white  font-Sail_Regular placeholder-[#919EAB]"
						/>
						<TextField
							label="Confirmar nueva contraseña"
							styleClassLabel="!font-Sail_Regular !text-[20px]"
							value={newpassagain}
							onChange={() => setNewPassAgain}
							type="text"
							placeholder="Confirmar nueva contraseña"
							styleClass="w-[60%] bg-white  font-Sail_Regular placeholder-[#919EAB]"
						/>
						<button
							onClick={() => {}}
							className=" mt-[2rem] w-[40%] hover:cursor-pointer text-[16px] border border-black text-white font-Roboto_Bold rounded-[8px] px-5 py-3 flex items-center justify-center text-center bg-[#E38A5D] hover:bg-[#e4743c]"
						>
							Guardar cambios
						</button>
					</div>
				</div>

				<BookingSection />
				<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default DataPerfilPage;
