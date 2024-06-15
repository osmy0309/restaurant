interface CardMenuProps {
	image: string;
	title: string;
	description: string;
	id: number;
	date: Date;
	persons: number;
	price: number;
}

function ReservationCard({ image, title, description, id, date, persons, price }: CardMenuProps) {
	const formattedDate = date.toLocaleDateString("es-ES", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedTime = date.toLocaleTimeString("es-ES", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});
	return (
		<div className={` flex w-[50%] p-[2rem]   bg-white   rounded-[8px]  `}>
			<div className=" h-[70px] bg-transparent flex justify-start items-start  w-[10%]">
				<img className="w-[100%] h-full rounded-[8px]" src={`${image}`} />
			</div>
			<div className="flex flex-col pl-[2rem] bg-white gap-3 font-Roboto ] w-[80%]">
				<div className="text-[16px] font-normal font-Roboto_Bold text-start text-[#1F0B01]">{title}</div>
				<div className="flex gap-2">
					<span className=" flex border-[1px] gap-1 border-[#E3E3E3] rounded-[8px] p-[10px]">
						<img src="/images/card/calendar.png" className="w-[20px] h-[20px]" />
						<p className="text-[13px] font-Roboto_Bold text-[#1F0B01]">{formattedDate}</p>
					</span>

					<span className=" flex border-[1px] gap-2 border-[#E3E3E3] rounded-[8px] p-[10px]">
						<img src="/images/card/clock.png" className="w-[20px] h-[20px]" />
						<p className="text-[13px] font-Roboto_Bold text-[#1F0B01]">{formattedTime}</p>
					</span>
					<span className=" flex border-[1px] gap-2 border-[#E3E3E3] rounded-[8px] p-[10px]">
						<img src="/images/card/user.png" className="w-[20px] h-[20px]" />
						<p className="text-[13px] font-Roboto_Bold text-[#1F0B01]">{persons}</p>
					</span>
				</div>
				<div className="flex flex-col">
					<p className="font-Roboto text-[#525252] text-[13px]">DESCRIPCIÓn</p>
					<p className=" font-Roboto text-[#525252] text-[13px]text-justify" dangerouslySetInnerHTML={{ __html: description }} />
				</div>
				<div className="flex gap-1 hover:cursor-pointer items-center">
					<p className="font-Roboto_Bold text-[14px]">Cancelar Reserva</p>
					<img src="/images/reserve/close.png" className="z-10 w-[10px] h-[10px]  " />
				</div>
			</div>
			<div className=" w-[10%] flex flex-col">
				<p className="font-Roboto_Bold text-[12px]">Anticipo</p>
				<p className="font-Roboto text-[14px] text-[#888888]">{price} USD</p>
			</div>
		</div>
	);
}

export default ReservationCard;
