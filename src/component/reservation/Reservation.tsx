import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import Modal from "../modal/Modal";
import OptionService from "./OpcionServices";
import CalendarForm from "../form/Calendar";
import Select from "../form/Select";
import TextField from "../form/TextFielReservation";
import TextTarea from "../form/TextTarea";
import TableReservation from "./TableNumberReservation";
import ClockReservation from "./ClockReservation";
interface ReserveFormProps {
	setModalOpen: any;
	modalopen: boolean;
	style: any;
}
interface OptionProps {
	value: string;
	option: string;
}
function Reservation(props: ReserveFormProps) {
	let services = useSelector((state: RootState) => state.services.data);
	let spaces = useSelector((state: RootState) => state.spaces.data);
	const [option, setOption] = useState<OptionProps[]>([]);
	const [section, setSection] = useState<number>(2);
	const [selectSpace, setSelectSpace] = useState();
	const [people, setPeople] = useState<number>(1);
	const [name, setName] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [ci, setCI] = useState<string>("");
	const [phone, setPhone] = useState<number>();
	const [hour, setHour] = useState<number>(1);
	const [minutes, setMinutes] = useState<number>(0);
	const [am_pm, setAm_Pm] = useState<number>(0);
	const [date, setDate] = useState(new Date());
	const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

	const [serviceselect, setServicesSelected] = useState<number | undefined>(undefined);
	console.log("Servicios en Reservacion", spaces);
	const formattedMinutes = (minutes: number) => {
		return minutes < 10 ? `0${minutes}` : minutes.toString();
	};
	useEffect(() => {
		const mappedOptions = spaces.map((data: any) => {
			return {
				value: data.id,
				option: data.chortName,
			};
		});

		setOption(mappedOptions);
	}, []);

	useEffect(() => {
		console.log("cambio", serviceselect);
	}, [props.modalopen]);

	useEffect(() => {
		if (section == 1) {
			setDate(new Date());
			setPeople(1);
			setHour(1);
			setMinutes(0);
		}
	}, [section]);
	return (
		<>
			{}
			<Modal style={props.style} onCloseModal={() => props.setModalOpen(false)}>
				<div
					className={`flex flex-col items-center justify-center bg-white  pb-[3rem] z-10 ${
						section == 1 ? "" : "animate-fade-right opacity-0 hidden"
					}`}
				>
					<img src="/images/reserve/IvánChefsJusto.png" className="z-10 w-[12rem] h-[2rem] hover:cursor-pointer" />
					<p className="font-Sail_Regular text-[48px] pb-[3rem] text-center">¿Que deseas reservar?</p>
					<OptionService name={"Una mesa"} setValue={setServicesSelected} setSection={setSection} id={0} />
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
					{<p className="font-Sail_Regular text-[48px]  text-center">Detalles de la reserva</p>}
					<TableReservation people={people} setPeople={setPeople} />

					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Selecciona la fecha de reserva</p>
						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-auto px-[5rem]">
							<CalendarForm />
						</div>
					</div>
					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Selecciona el espacio</p>
						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-auto ">
							<Select styleClass="!border-[0px] bg-white text-[#1F0B01]  !text-[18px] font-Roboto" options={option} onChange={() => setSelectSpace} />
						</div>
					</div>
					<ClockReservation hour={hour} minutes={minutes} setHour={setHour} setMinutes={setMinutes} am_pm={am_pm} setAm_Pm={setAm_Pm} />
					<div className="flex gap-5 items-center justify-center w-full pt-3">
						{/*<button
							onClick={() => setSection(1)}
							className=" hover:cursor-pointer text-[16px] border font-Roboto_Bold border-black rounded-[8px] px-5 py-3 flex items-center justify-center text-center  w-[10rem]"
						>
							Atras
				</button>*/}
						<button
							onClick={() => setSection(3)}
							className=" w-[80%] hover:cursor-pointer text-[16px] border border-black text-white font-Roboto_Bold rounded-[8px] px-5 py-3 flex items-center justify-center text-center bg-[#E38A5D] hover:bg-[#e4743c]"
						>
							Continuar
						</button>
					</div>
				</div>

				<div
					className={`flex flex-col gap-[20px] w-full items-center justify-center bg-white  pb-[3rem]  ${
						section == 3 ? "animate-fade-left opacity-100" : "animate-fade-right opacity-0 hidden"
					}`}
				>
					<img src="/images/reserve/IvánChefsJusto.png" className="w-[12rem] h-[2rem] hover:cursor-pointer" />
					{/*<p className="font-Sail_Regular text-[48px]  text-center">Detalles de la reserva</p>*/}

					<div className="flex gap-8 w-full p-1">
						<section className="flex flex-col gap-1">
							<img src="/images/reserve/calendar.png" className=" w-[22px] h-[20px] hover:cursor-pointer" />
							<p className="font-Roboto text-[#888888] text-[18px]">Fecha de reserva</p>
							<p className="font-Roboto_Bold text-[#1F0B01] text-[20px]">
								{
									// @ts-ignore
									new Intl.DateTimeFormat("es-ES", options).format(date)
								}
							</p>
						</section>
					</div>
					<div className="flex gap-8 w-full p-1">
						<section className="flex flex-col gap-1 w-[60%]">
							<img src="/images/reserve/clock.png" className="w-[22px] h-[20px] hover:cursor-pointer" />
							<p className="font-Roboto text-[#888888] text-[18px]">Hora</p>
							<section className="gap-1 font-Roboto_Bold flex text-[#1F0B01] text-[20px]">
								<p>{formattedMinutes(hour)}</p>
								<p>:</p>
								<p>{formattedMinutes(minutes)}</p>
								<p>{am_pm == 0 ? "AM" : "PM"}</p>
							</section>
						</section>
						<section className="flex flex-col gap-1 w-[40%]">
							<img src="/images/reserve/user.png" className=" w-[22px] h-[20px] hover:cursor-pointer" />
							<p className="font-Roboto text-[#888888] text-[18px]">Personas</p>
							<p className="font-Roboto_Bold text-[#1F0B01] text-[20px]">{people}</p>
						</section>
					</div>

					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Nombre</p>
						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-[60px] ">
							<TextField
								styleClass="!border-[0px] bg-white text-[#1F0B01]  !text-[18px] font-Roboto"
								value={name}
								type="text"
								onChange={() => setName}
							/>
						</div>
					</div>
					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Carnet de identidad</p>
						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-[60px] ">
							<TextField styleClass="!border-[0px] bg-white text-[#1F0B01]  !text-[18px] font-Roboto" value={ci} type="text" onChange={() => setCI} />
						</div>
					</div>

					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Numero de teléfono</p>
						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-[60px] ">
							<TextField
								styleClass="!border-[0px] bg-white text-[#1F0B01]  !text-[18px] font-Roboto"
								value={phone}
								type="number"
								placeholder="58538091"
								onChange={() => setPhone}
							/>
						</div>
					</div>
					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Descripcion</p>

						<TextTarea
							name="email"
							styleClass="!border-b-0 flex !justify-center !items-center shadow-3xl p-4 h-[100px] rounded-[12px] w-full  bg-white text-[#1F0B01]  !text-[18px] font-Roboto"
							value={description}
							onChange={(value) => setDescription(value)}
							cols={50}
							rows={50}
						/>
					</div>

					<div className="flex gap-5 items-start justify-start w-full pt-3">
						<button
							onClick={() => setSection(2)}
							className="h-[55px] hover:cursor-pointer text-[16px] border font-Roboto_Bold border-black rounded-[8px] px-5 py-3 flex items-center justify-center text-center  w-[10rem]"
						>
							Atras
						</button>
						<button className="h-[55px] w-[80%] hover:cursor-pointer text-[16px] border border-black text-white font-Roboto_Bold rounded-[8px] px-5 py-3 flex items-center justify-center text-center bg-[#E38A5D] hover:bg-[#e4743c]">
							{/*<img src="/images/menu/solar_user-broken.png" className="w-[45px] h-[35px] hover:cursor-pointer" />*/}
							Reservar
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
}

export default Reservation;
