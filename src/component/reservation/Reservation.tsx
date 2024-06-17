import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";

import Modal from "../modal/Modal";
import OptionService from "./OpcionServices";
import Select from "../form/Select";
import TextField from "../form/TextFielReservation";
import TextTarea from "../form/TextTarea";
import TableReservation from "./TableNumberReservation";
import ClockReservation from "./ClockReservation";
import { ReserveDTO } from "../../shared/dtos/bookingDTO";
import dayjs from "dayjs";
import CustomCalendar from "../form/CalendarCustom";
import { reserveApi } from "../../services/bookingApi";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { setOpenReserve } from "../../features/auth/authSlice";
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


	const currentDate = dayjs();
	const formattedDate = currentDate.format('YYYY-MM-DD');


	let services = useSelector((state: RootState) => state.services.data);
	let spaces = useSelector((state: RootState) => state.spaces.data);
	let auth = useSelector((state: RootState) => state.auth.data);

	const [option, setOption] = useState<OptionProps[]>([]);
	const [section, setSection] = useState<number>(2);
	const [selectSpace, setSelectSpace] = useState<string>();
	const [people, setPeople] = useState<number>(1);
	const [name, setName] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [ci, setCI] = useState<string>();
	const [email, setEmail] = useState<string>(auth?.email || "");
	const [phone, setPhone] = useState<string>();
	const [hour, setHour] = useState<number>(1);
	const [minutes, setMinutes] = useState<number>(0);
	const [am_pm, setAm_Pm] = useState<number>(0);
	const [date, setDate] = useState<string>(formattedDate);
	const [_, setServicesSelected] = useState<number | undefined>(undefined);
	const [month,setMonth] = useState<number>(0);
	const [isValid, setIsValid] = useState<boolean>(false);
	const [loading,setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (name && phone && phone?.length >= 8 && ci && email) {
			setIsValid(true)
		}
		else setIsValid(false);
	}, [name, phone, ci])

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
		spaces?.length > 0 && setSelectSpace(spaces[0]?.id.toString());
	}, [spaces])

	useEffect(() => {
		if (section == 1) {
			setDate(currentDate.format("YYYY-MM-DD"));
			setPeople(1);
			setHour(1);
			setMinutes(0);
		}
	}, [section]);
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const handleReserve =async () => {
		try {
			const data: ReserveDTO = {
				email: email,
				date: `${date} ${am_pm == 0 ? `${hour}:${formattedMinutes(minutes)}` : `${hour + 12}:${formattedMinutes(minutes)}`}`,
				pax: people,
				description: description || "",
				space: selectSpace?.toString() || "",
				fullName: name || "",
				dni: ci || "",
				cellphone: phone?.toString() || "",
			}
			console.log("Reservar :", data);
			setLoading(true);
			const response = await reserveApi(data);
			console.log("Response :",response);
			setLoading(false)
			notification.success({
				message: `Reserva creada`,
				description: 'La reserva se ha completado con exito',
				placement: "bottom",
			  });
			  dispatch(setOpenReserve(false));
			auth?.email && navigate("/bookings");
			
		} catch (error) {
			setLoading(false)
			notification.error({
				message: `Error al reservar`,
				description: 'No se ha podido realizar la reserva',
				placement: "bottom",
			  });
		}
		

	}

	return (
		<>
			{ }
			<Modal style={props.style} onCloseModal={() => props.setModalOpen(false)}>
				<div
					className={`flex flex-col items-center justify-center bg-white  pb-[3rem] z-10 ${section == 1 ? "" : "animate-fade-right opacity-0 hidden"
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
					className={`flex flex-col gap-[20px] w-full items-center justify-center bg-white  pb-[3rem]  ${section == 2 ? "animate-fade-left opacity-100" : "animate-fade-right opacity-0 hidden"
						}`}
				>
					<img src="/images/reserve/IvánChefsJusto.png" className="w-[12rem] h-[2rem] hover:cursor-pointer" />
					{<p className="font-Sail_Regular text-[48px]  text-center">Detalles de la reserva</p>}
					<TableReservation people={people} setPeople={setPeople} />
					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Selecciona la fecha de reserva</p>

						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-auto px-[5rem]">
							<div className="hover:cursor-pointer m-[5px]" onClick={() =>  setMonth(month-1)}>
								<img src="/images/reserve/row.png" className="w-[20px] !h-[20px] hover:cursor-pointer" />
							</div>
							<CustomCalendar setValue={setDate} value={date} month={month} setMonth={setMonth}/>
							<div className="text-center font-bold text-[25px] hover:cursor-pointer m-[5px]" onClick={() => setMonth(month+1)}>
								<img src="/images/reserve/row.png" className="rotate-180 w-[20px] !h-[20px] hover:cursor-pointer" />
							</div>
						</div>
					</div>
					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Selecciona el espacio</p>
						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-auto ">
							<Select styleClass="!border-[0px] bg-white text-[#1F0B01]  !text-[18px] font-Roboto" options={option} onChange={setSelectSpace} />
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
					className={`flex flex-col gap-[20px] w-full items-center justify-center bg-white  pb-[3rem]  ${section == 3 ? "animate-fade-left opacity-100" : "animate-fade-right opacity-0 hidden"
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
									date
									// @ts-ignore
									//new Intl.DateTimeFormat("es-ES", options).format(date)
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
						<div className="flex gap-1">
							{" "}
							<p className="font-Roboto pb-2 text-[#1F0B01]">Nombre</p>
							<span className="text-[#ff0000]">*</span>
						</div>

						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-[60px] ">
							<TextField
								required
								styleClass="!border-[0px] bg-white text-[#1F0B01]  !text-[18px] font-Roboto"
								value={name}
								type="text"
								onChange={setName}
							/>
						</div>
					</div>
					<div className="flex flex-col !justify-start !items-start w-full ">
						<div className="flex gap-1">
							{" "}
							<p className="font-Roboto pb-2 text-[#1F0B01]">Carnet de identidad</p>
							<span className="text-[#ff0000]">*</span>
						</div>
						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-[60px] ">
							<TextField
								styleClass="!border-[0px] bg-white text-[#1F0B01]  !text-[18px] font-Roboto"
								required
								value={ci}
								type="text"
								onChange={setCI}
							/>
						</div>
					</div>
					<div className="flex flex-col !justify-start !items-start w-full ">
						<div className="flex gap-1">
							{" "}
							<p className="font-Roboto pb-2 text-[#1F0B01]">Correo</p>
							<span className="text-[#ff0000]">*</span>
						</div>
						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-[60px] ">
							<TextField
								styleClass="!border-[0px] bg-white text-[#1F0B01]  !text-[18px] font-Roboto"
								required
								value={email}
								type="text"
								onChange={setEmail}
							/>
						</div>
					</div>

					<div className="flex flex-col !justify-start !items-start w-full ">
						<div className="flex gap-1 ">
							{" "}
							<p className="font-Roboto pb-2 text-[#1F0B01]">Numero de teléfono</p>
							<span className="text-[#ff0000]">*</span>
						</div>
						<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full h-[60px] ">
							<TextField
								required
								styleClass="!border-[0px] bg-white text-[#1F0B01]  !text-[18px] font-Roboto"
								value={phone}
								type="number"
								placeholder="58538091"
								onChange={setPhone}
							/>
						</div>
					</div>
					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Descripcion</p>

						<TextTarea
							name="email"
							styleClass="!border-b-0 flex !justify-center !items-center shadow-3xl p-4 h-[130px] rounded-[12px] w-full  bg-white text-[#1F0B01]  !text-[18px] font-Roboto"
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
						<button onClick={handleReserve} disabled={!isValid || loading} className={`h-[55px] w-[80%] hover:cursor-pointer text-[16px] border border-black text-white font-Roboto_Bold rounded-[8px] px-5 py-3 flex items-center justify-center text-center ${isValid && !loading ? 'bg-[#E38A5D] hover:bg-[#e4743c]' : 'bg-[#808080]'}`}>
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
