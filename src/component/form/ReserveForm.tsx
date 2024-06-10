import { FormEvent, useEffect, useState } from "react";
import TextField from "./TextField";
import Textarea from "./TextTarea";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { loadSpacesData } from "../../features/spaces/spacesSlice";
import SelectOptions from "./SelectOptions";
import TimePicker from "./TimePicker";

interface ReserveFormProps {
	email?: string;
	spaceId?: string;
}

function ReserveForm(props: ReserveFormProps) {
	let spaces = useSelector((state: RootState) => state.spaces.data);
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(loadSpacesData());
	}, [])
	const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault()
		if (name != "" && email != "" && message != "") {
			setLoading(true)
			//const response = await contactUsApi({name,email,message});
			setLoading(false)
			setName("");
			setMessage("");
			/*response.status === 200 && notification.success({
				message: `Mensaje enviado`,
				description:"Espere la respuesta a su correo",
				placement: "bottom",
			  });*/
		}
	};
	const [loading, setLoading] = useState<boolean>(false);
	const [location, setlocation] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	useEffect(() => {
		props?.email && setEmail(props?.email)
	}, [props])

	useEffect(()=>{
		console.log('Cambio el espacio :',location)
	},[location])

	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] z-10">
				<div className="flex space-x-4 justify-items-center items-center   pb-[2rem]">
					<p className="font-Sail_Regular text-[64px] flex text-[#1F0B01] ">Reserva una Mesa</p>
				</div>

				<div className="w-[40%]">
					<form onSubmit={onSubmit} className="w-[100%] flex flex-col gap-[3rem] pb-[2rem] items-center">
						<SelectOptions
							required
							name="space"
							placeholder="Seleccione un espacio"
							label="Espacio"
							options={spaces}
							value={props?.spaceId}
							onChange={(value) => setlocation(value)}
						/>
						<TimePicker/>
						<TextField
							required
							name="name"
							placeholder="Nombre/Alias"
							label="Nombre/Alias"
							type="text"
							value={name}
							onChange={(value) => setName(value)}
						/>
						<TextField
							required
							name="email"
							placeholder="Correo eléctronico"
							label="Correo eléctronico"
							type="email"
							value={email}
							onChange={(value) => setEmail(value)}
						/>
						<Textarea
							required
							name="email"
							placeholder="Mensaje"
							label="Mensaje"
							value={message}
							onChange={(value) => setMessage(value)}
							cols={50}
							rows={50}
						/>

						<button
							disabled={loading}
							type="submit"
							className={`${loading && 'animate-spin'} w-[20%] rounded-[5px] flex justify-center items-center bg-[#E38A5D] h-[3rem] p-2 px-8 tracking-[5%] leading-[16px]  hover:cursor-pointer hover:bg-[#e4743c] transition-colors duration-300`}
						>
							{" "}
							<p className="text-white text-[16px] font-bold font-Roboto">Enviar</p>
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default ReserveForm;
