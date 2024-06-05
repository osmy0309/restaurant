import { useState } from "react";
import TextField from "../form/TextField";
import TextTarea from "../form/TextTarea";

function ContactSection() {
	const onSubmit = async (ev: any) => {};
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [messaje, setMessaje] = useState<string>("");

	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] z-10">
				<div className="flex space-x-4 justify-items-center items-center   pb-[2rem]">
					<p className="font-Sail_Regular text-[64px] flex text-[#1F0B01] ">Contáctanos</p>
				</div>

				<div className="w-[40%]">
					<form onSubmit={onSubmit} className="w-[100%] flex flex-col gap-[3rem] pb-[2rem]">
						<TextField name="name" placeholder="Nombre/Alias" label="Nombre/Alias" type="text" value={name} onChange={(value) => setName(value)} />
						<TextField
							name="email"
							placeholder="Correo eléctronico"
							label="Correo eléctronico"
							type="email"
							value={email}
							onChange={(value) => setEmail(value)}
						/>
						<TextTarea
							name="email"
							placeholder="Mensaje"
							label="Mensaje"
							value={messaje}
							onChange={(value) => setMessaje(value)}
							cols={50}
							rows={50}
						/>
					</form>
				</div>
			</div>
		</>
	);
}

export default ContactSection;
