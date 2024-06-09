import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
function IntermedialSection() {
	let setting = useSelector((state: RootState) => state.setting.data);
	return (
		<div className="pb-[2rem] pt-[5rem]">
			<div className=" w-full !h-[800px] ">
				{setting.homeImages && <img className="w-full h-full " src={setting.homeImages.intermedial} alt={"Banner"} />}
			</div>
		</div>
	);
}

export default IntermedialSection;
