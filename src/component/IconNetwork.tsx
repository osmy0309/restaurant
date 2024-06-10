import { Link } from "react-router-dom"
import { SocialNetworkData } from "../shared/dtos/settingsDTO"

interface IconNetworkProps {
    network:SocialNetworkData
}

const IconNetwork = ({network}:IconNetworkProps) =>{
    console.log("Valores en las redes :",network);
    
    return (
        <>
        <Link to={network.value || "/"}  target="_blank" rel="noopener noreferrer" className="z-50">
        {
            <img className="h-[30px] hover:cursor-pointer" src={`/images/card/${network.name.toLowerCase()}.png`} />
        }
        </Link>
        </>
    )
}

export default IconNetwork;