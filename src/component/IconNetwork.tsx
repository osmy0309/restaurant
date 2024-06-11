import { SocialNetworkData } from "../shared/dtos/settingsDTO";

interface IconNetworkProps {
	network: SocialNetworkData;
}

const IconNetwork = ({ network }: IconNetworkProps) => {
	console.log("Valores en las redes :", network);

	return (
		<>
			<a className="z-50" href={network.value} target="_blank">
				{<img className="h-[30px] hover:cursor-pointer" src={`/images/card/${network.name.toLowerCase()}.png`} />}
			</a>
		</>
	);
};

export default IconNetwork;
