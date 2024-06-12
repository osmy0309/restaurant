import { Link } from "react-router-dom";

interface CardMenuProps {
	image: string;
	title: string;
	description: string;
	id: number;
	category: string;
}

function CardSpaceMenu({ image, title, description, category, id }: CardMenuProps) {
	return (
		<Link to={`/spaces/${id}`}>
			<div
				className={`w-full xl:!h-[100%] 2xl:!h-[100%] p-5 flex flex-col bg-transparent z-10 items-center bg-white  hover:shadow-3xl transition-shadow duration-300 rounded-[20px] cursor-pointer `}
			>
				<div className={`w-[90%] h-[200px] xl:!h-[100px] 2xl:!h-[200px] !rounded-[10px] flex justify-center items-center my-[1rem]`}>
					<img className="w-full h-full !rounded-[10px]" src={`${image}`} />
				</div>
				<div className=" w-[90%]  flex flex-col gap-3 font-Roboto ] rounded-b-[20px] pl-3">
					<div className="text-[16px] font-bold  font-Roboto text-[#525252]">{category}</div>
					<div className="text-[24px] font-normal font-Sail_Regular text-center text-[#1F0B01]">{title}</div>
					<div
						className=" h-[100%] max-h-[200px] text-[13px] font-Roboto text-[#888888] text-justify pb-4 overflow-auto !p-2"
						style={{ scrollbarWidth: "none", scrollbarColor: "#888888 #f4f4f4" }}
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				</div>
			</div>
		</Link>
	);
}

export default CardSpaceMenu;
