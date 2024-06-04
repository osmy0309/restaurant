interface CardMenuProps {
	image: string;
	title: string;
	description: string;
	id: number;
}

function CardSpace({ image, title, description, id }: CardMenuProps) {
	return (
		<div
			className={`h-full flex flex-col rounded-[20px] bg-transparent border  z-10 hover:hover:shadow-left-bottom transition-shadow duration-300 border-bordermenu `}
		>
			<div className="w-[100%] h-full bg-transparent ">
				<img className="w-[100%] h-full rounded-t-[20px]" src={`${image}`} />
			</div>

			<div className="flex flex-col p-[36px] bg-white gap-3  rounded-b-[20px] ">
				<div className="text-[16px] font-bold  text-[#525252]">Restaurant</div>
				<div className="font-bold  font-Sail_Regular text-[#1F0B01] text-[40px]">{title}</div>
				<div className=" text-[13px] text-[#888888] font-Roboto"> {description}</div>
			</div>

			<div className="flex p-[36px] gap-[1rem]">
				<img className="h-[30px] hover:cursor-pointer" src="/images/card/facebook.png" />
				<img className="h-[30px] hover:cursor-pointer" src="/images/card/instagram.png" />
				<img className="h-[30px] hover:cursor-pointer" src="/images/card/whatsapp.png" />
			</div>
		</div>
	);
}

export default CardSpace;