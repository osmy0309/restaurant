import { Link } from "react-router-dom";

interface CardMenuProps {
	image: string;
	title: string;
	description: string;
	id: number;
	index: number;
	url?: string;
}

function CardEventsService({ image, title, description, index, url }: CardMenuProps) {
	return (
		<>
			<div className="h-[10px] text-[64px] font-bold font-Sail_Regular ">{/*title*/} Un espacio que ...</div>

			{index % 2 == 0 ? (
				<div className={`h-[400px] w-full flex  bg-transparent border-0 `}>
					<div className=" w-[50%] h-[400px] bg-transparent hover:cursor-pointer">
						<img className="rounded-[8px] w-full h-[400px]" src={image} alt={title} />
					</div>
					<div className=" w-[50%] flex flex-col p-[36px] bg-white gap-[2rem] h-[400px] rounded-b-[20px]">
						<div className="h-[50%] max-h-[50%] overflow-hidden text-[16px] font-Roboto" dangerouslySetInnerHTML={{ __html: description }} />
						<Link to={url || "/reserve/table/selection"}>
							<div className="h-[10%] flex items-center gap-2 hover:hover:animate-fade-right animate-once animate-ease-linear cursor-pointer">
								<p className="font-Sail_Regular text-[#E38A5D] text-[32px]">Reserva una mesa</p>
								<img src="/images/card/row.png" className="h-[10px]" />
							</div>
						</Link>
					</div>
				</div>
			) : (
				<div className={`h-[400px] w-full flex  bg-transparent `}>
					<div className=" w-[50%] flex flex-col p-[36px] bg-white gap-[2rem] h-[400px] rounded-b-[20px]">
						<div className="auto text-[40px] font-bold font-Sail_Regular ">{title}</div>
						<div className="h-[50%]  max-h-[50%] overflow-auto text-[16px] font-Roboto" dangerouslySetInnerHTML={{ __html: description }} />
						<div className="h-[10%] flex items-center gap-2 hover:hover:animate-fade-right animate-once animate-ease-linear cursor-pointer">
							<p className="font-Sail_Regular text-[#E38A5D] text-[32px]">Reserva una mesa</p>
							<img src="/images/card/row.png" className="h-[10px]" />
						</div>
					</div>
					<div className=" w-[50%] h-[400px] bg-transparent hover:cursor-pointer">
						<img className="rounded-[8px] w-full h-[400px]" src={image} alt={title} />
					</div>
				</div>
			)}
		</>
	);
}

export default CardEventsService;
