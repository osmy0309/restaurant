interface CardMenuProps {
	image: string;
	title: string;
	description: string;
	id: number;
	category: string;
}

function CardSpaceMenu({ image, title, description, category }: CardMenuProps) {
	return (
		<div
			className={`w-full h-full p-5 flex flex-col bg-transparent z-10 items-center bg-white  hover:shadow-left-bottom transition-shadow duration-300 rounded-[20px] cursor-pointer `}
		>
			<div
				className={`w-[90%] h-[200px] xl:!h-[100px] 2xl:!h-[200px] !rounded-[10px] flex justify-center items-center my-[1rem]`}
			>
				<img className="w-full h-full !rounded-[10px]" src={`${image}`} />
			</div>
			<div className=" w-[90%]  flex flex-col gap-3 font-Roboto ] rounded-b-[20px] pl-3">
				<div className="text-[16px] font-bold  text-[#525252]">{category}</div>
				<div className="text-[24px] font-normal font-Sail_Regular text-center text-[#1F0B01]">{title}</div>
				<div className=" text-[13px] font-Roboto text-[#888888] text-justify pb-4"> {description}</div>
			</div>
		</div>
	);
}

export default CardSpaceMenu;
