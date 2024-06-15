import { Link } from "react-router-dom";
import { SocialNetworkData } from "../shared/dtos/settingsDTO";

interface IconNetworkProps {
	network: SocialNetworkData;
	handleSocialLinkClick?: any;
}

const IconNetwork = ({ network, handleSocialLinkClick }: IconNetworkProps) => {
	return (
		<>
			<Link key={network.name} className="z-50" to={network.value || "/"} target="_blank" onClick={handleSocialLinkClick} rel="noopener noreferrer">
				{
					<img
						className="h-[30px] hover:cursor-pointer hover:h-[40px] hover:transition-shadow duration-300"
						src={`/images/card/${network.name.toLowerCase()}.png`}
					/>
				}
			</Link>
		</>
	);
};

export default IconNetwork;
