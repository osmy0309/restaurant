import { SocialNetworkData } from "../shared/dtos/settingsDTO";

interface IconNetworkProps {
	network: SocialNetworkData;
	handleSocialLinkClick?: any;
}

const IconNetwork = ({ network, handleSocialLinkClick }: IconNetworkProps) => {
	console.log("Valores en las redes :", network);

	return (
		<>
			<a key={network.name} className="z-50" href={network.value} target="_blank" onClick={handleSocialLinkClick} rel="noopener noreferrer">
				{<img className="h-[30px] hover:cursor-pointer hover:h-[40px] hover:rounded-full" src={`/images/card/${network.name.toLowerCase()}.png`} />}
			</a>
		</>
	);
};

export default IconNetwork;
