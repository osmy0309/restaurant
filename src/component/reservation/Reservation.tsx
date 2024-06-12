import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import Modal from "../modal/Modal";
import OptionService from "./OpcionServices";
import CalendarForm from "../form/Calendar";
import TableReservation from "./TableNumberReservation";
import ClockReservation from "./ClockReservation";
interface ReserveFormProps {
	setModalOpen: any;
	modalopen: any;
	style: any;
}
function Reservation(props: ReserveFormProps) {
	let services = useSelector((state: RootState) => state.services.data);
	console.log("Servicios en Reservacion", services);

	const [section, setSection] = useState<number>(1);
	const [people, setPeople] = useState<number>(1);
	const [hour, setHour] = useState<number>(1);
	const [minutes, setMinutes] = useState<number>(0);
	const [am_pm, setAm_Pm] = useState<number>(0);

	//const [section, setSection] = useState<number>(1);

	const [serviceselect, setServicesSelected] = useState<number | undefined>(undefined);
	useEffect(() => {
		console.log("cambio", serviceselect);
	}, [props.modalopen]);
	return (
		<>
			{}
			<Modal style={props.style} onCloseModal={() => props.setModalOpen(false)}>
				<div
					className={`flex flex-col items-center justify-center bg-white  pb-[3rem] z-10 ${
						section == 1 ? "" : "animate-fade-right opacity-0 hidden"
					}`}
				>
					<img src="/images/reserve/IvánChefsJusto.png" className="w-[12rem] h-[2rem] hover:cursor-pointer" />
					<p className="font-Sail_Regular text-[48px] pb-[3rem] text-center">¿Que deseas reservar?</p>
					{services.map((data) => (
						<OptionService name={data.chortName} setValue={setServicesSelected} setSection={setSection} id={data.id} />
					))}
				</div>

				<div
					className={`flex flex-col gap-[20px] w-full items-center justify-center bg-white  pb-[3rem]  ${
						section == 2 ? "animate-fade-left opacity-100" : "animate-fade-right opacity-0 hidden"
					}`}
				>
					<img src="/images/reserve/IvánChefsJusto.png" className="w-[12rem] h-[2rem] hover:cursor-pointer" />
					<p className="font-Sail_Regular text-[48px]  text-center">Detalles de la reserva</p>
					<TableReservation people={people} setPeople={setPeople} />

					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Selecciona la fecha de reserva</p>
						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full px-[5rem]">
							<CalendarForm />
						</div>
					</div>
					<ClockReservation hour={hour} minutes={minutes} setHour={setHour} setMinutes={setMinutes} am_pm={am_pm} setAm_Pm={setAm_Pm} />
				</div>
			</Modal>
		</>
	);
}

export default Reservation;
