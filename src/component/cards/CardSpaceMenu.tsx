interface CardMenuProps {
	image: string;
	title: string;
	description: string;
	id: number;
}

function CardSpaceMenu({ image, title, description, id }: CardMenuProps) {
	return (
		<div
			className={`w-full h-full p-5 flex flex-col bg-transparent z-10 items-center bg-white  hover:shadow-left-bottom transition-shadow duration-300 rounded-[20px] cursor-pointer `}
		>
			<div className={`w-[90%] h-[200px] bg-[url('${image}')] bg-cover bg-center !rounded-[10px] flex justify-center items-center my-[1rem]`}></div>
			<div className=" w-[90%]  flex flex-col gap-3 font-Roboto ] rounded-b-[20px] pl-3">
				<div className="text-[24px] font-normal font-Sail_Regular text-center text-[#1F0B01]">{title}</div>
				<div className=" text-[13px] font-Roboto text-[#888888] text-justify pb-4"> {description}</div>
			</div>
		</div>
	);
}

export default CardSpaceMenu;
