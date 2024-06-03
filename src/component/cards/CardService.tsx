interface CardMenuProps {
	image: string;
	title: string;
	description: string;
	id: number;
	index: number;
	length: number;
}

function CardService({ image, title, description, id, index, length }: CardMenuProps) {
	return (
		<div
			className={`h-full flex flex-col bg-transparent z-10 items-center bg-white  hover:shadow-left-bottom transition-shadow duration-300 rounded-[20px] ${
				length % 3 == 2 && index > length - (length % 3)
					? "md:ml-[100%] md:w-[100%]"
					: length % 3 == 1 && index > length - (length % 3)
					? "md:ml-[220%] md:w-[100%]"
					: ""
			} `}
		>
			<div className="w-[150px] h-[150px] bg-transparent flex justify-center items-center my-[1rem]">
				<img className="w-[100%] h-full rounded-full" src={`${image}`} />
			</div>
			<div className="flex flex-col p-[36px] bg-white gap-3 font-Roboto ] rounded-b-[20px]">
				<div className="text-[36px] font-normal font-Sail_Regular text-center text-[#1F0B01]">{title}</div>
				<div className=" text-[16px] font-Roboto text-[#888888] text-center"> {description}</div>
			</div>
		</div>
	);
}

export default CardService;
