import { SocialNetworkData } from "../../shared/dtos/settingsDTO";

interface NetworksProps {
	data: SocialNetworkData;
}
function Networks(props: NetworksProps) {
	return (
		<div className="w-full  bg-transparent  flex  items-center pb-2">
			<img className="w-[40px] h-[40px]" src={`/images/card/${props.data.name.toLowerCase()}.png`} />
			<p className="text-[15px] text-[#FFFFFF] pl-1">{props.data.value}</p>
		</div>
	);
}

export default Networks;
