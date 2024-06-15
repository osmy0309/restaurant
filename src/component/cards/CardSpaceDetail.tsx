import { SpaceDTO } from "../../shared/dtos/spacesDTO";

interface CardSpaceDetailProps {
	space: SpaceDTO;
}

function CardSpaceDetail({ space }: CardSpaceDetailProps) {
	return (
		<>
			<div className={`w-full flex  bg-transparent border-0 gap-2`}>
				<div className=" w-[50%] h-[400px] bg-transparent hover:cursor-pointer">
					<img className="rounded-[8px] w-full h-[400px]" src={space.coverImage} alt={space.chortName} />
				</div>
				<div className=" w-[50%] flex flex-col p-[36px] bg-white gap-3 rounded-[8px]">
					<div className="auto text-[40px] font-bold font-Roboto ">{space.chortName}</div>
					<div className="h-[50%] max-h-[50%] overflow-none text-[16px] font-Roboto" dangerouslySetInnerHTML={{ __html: space.description }} />
					
				</div>
			</div>
		</>
	);
}

export default CardSpaceDetail;
