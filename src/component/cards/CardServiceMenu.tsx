interface CardMenuProps {
	image: string;
	title: string;
	description: string;
	id: number;
}

function CardServiceMenu({ image, title, description }: CardMenuProps) {
	return (
		<div
			className={`w-full h-auto p-5 flex bg-transparent z-10 items-center bg-white  hover:shadow-left-bottom transition-shadow duration-300 rounded-[20px] cursor-pointer `}
		>
			<div className={`w-[30%] h-full  !rounded-full flex justify-center items-center my-[1rem]`}>
				<img className="w-[100%] h-full rounded-t-[20px]" src={`${image}`} />
			</div>
			<div className=" w-[70%]  flex flex-col gap-3 font-Roboto ] rounded-b-[20px] pl-3">
				<div className="text-[24px] font-normal font-Sail_Regular text-[#1F0B01]">{title}</div>
				<div className=" text-[13px] font-Roboto text-[#888888] text-justify flex  pb-4" dangerouslySetInnerHTML={{ __html: description }} />
			</div>
		</div>
	);
}

export default CardServiceMenu;
