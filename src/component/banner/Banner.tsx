import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function Banner() {
	let setting = useSelector((state: RootState) => state.setting.data);
	console.log("BANNER", setting);

	return (
		<>
			<div className=" w-full !h-[800px]">
				{setting?.homeImages?.banner && <img className="w-full h-full rounded-t-[20px]" src={setting?.homeImages?.banner} alt={"Banner"} />}
			</div>
		</>
	);
}

export default Banner;
