import { Link } from "react-router-dom";

interface CardMenuProps {
	image: string;
	title: string;
	description: string;
	id: number;
	handleCloseMenuSelect: any;
}

function CardServiceMenu({ image, title, description, id }: CardMenuProps) {
	return (
		<>
			<Link to={`/services/${id}`}>
				<div className="w-full h-full p-2 flex bg-transparent z-10 items-center bg-white hover:shadow-3xl transition-shadow duration-300 rounded-[20px] cursor-pointer">
					<div className="w-[20%] h-auto rounded-full flex justify-center items-center my-[1rem]">
						<img className="w-full h-full rounded-t-[20px]" src={image} alt={title} />
					</div>
					<div className="w-[70%] flex flex-col gap-1 font-Roboto rounded-b-[20px] pl-3">
						<div className="text-[24px] font-normal font-Sail_Regular text-[#1F0B01]">{title}</div>
						<div
							className="text-[12px] font-Roboto text-[#888888] text-justify pb-4 max-h-[60px] overflow-hidden !p-2"
							style={{ scrollbarWidth: "thin", scrollbarColor: "#888888 #f4f4f4" }}
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</div>
				</div>
			</Link>
		</>
	);
}

export default CardServiceMenu;
