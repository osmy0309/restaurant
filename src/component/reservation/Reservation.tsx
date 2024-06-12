import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import Modal from "../modal/Modal";
import OptionService from "./OpcionServices";
interface ReserveFormProps {
	setModalOpen: any;
	modalopen: any;
	style: any;
}
function Reservation(props: ReserveFormProps) {
	let services = useSelector((state: RootState) => state.services.data);
	console.log("Servicios en Reservacion", services);
	//const [section, setSection] = useState<number>(1);
	const [serviceselect, setServicesSelected] = useState<number | undefined>(undefined);
	useEffect(() => {
		console.log("cambio", serviceselect);
	}, [props.modalopen]);
	return (
		<>
			<Modal style={props.style} onCloseModal={() => props.setModalOpen(false)}>
				{
					<div className="flex flex-col items-center justify-center bg-white  pb-[3rem] z-10 ">
						<img src="/images/reserve/IvánChefsJusto.png" className="w-[12rem] h-[2rem] hover:cursor-pointer" />
						<p className="font-Sail_Regular text-[48px] pb-[3rem] text-center">¿Que deseas reservar?</p>
						{services.map((data) => (
							<OptionService name={data.chortName} setValue={setServicesSelected} id={data.id} />
						))}
					</div>
				}
			</Modal>
		</>
	);
}

export default Reservation;
