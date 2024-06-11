import { commetsDTO } from "../../shared/dtos/spacesDTO";
import { SocialNetworkData } from "../../shared/dtos/settingsDTO";
import Comments from "./Comments";
import Networks from "./Networks";
interface BannerServicesProps {
	image: string;
	title: string;
	description: any;
	category: string;
	imgmovil: string;
	coments: commetsDTO[];
	networks: SocialNetworkData[];
}
function BannerServices({
	image = "images/banner/banner-Servicios.png",
	title,
	description,
	category,
	imgmovil,
	coments,
	networks,
}: Partial<BannerServicesProps>) {
	return (
		<>
			<div className="w-full pt-[5rem] !h-auto bg-black mb-[2rem] ">
				<div className=" w-full !h-[600px] ">
					<img className="absolute w-full  !h-[600px] " src={image} alt={"Banner"} />
					<div className="relative flex  text-white">
						<div className="w-[50%] flex flex-col  p-[5%]">
							<div className="font-Sail_Regular flex flex-col text-[90px] leading-[0.8]">
								<p>{category}</p>
								<p>{title}</p>
							</div>
							<img className="w-[70%]  !h-[40px] my-[1rem]" src="/images/banner/separator.png" alt={"separator"} />
							<div className="overflow-auto  font-Roboto text-justify text-[#C3B7B1] text-[15px]" dangerouslySetInnerHTML={{ __html: description }} />
						</div>
						<div className="w-[20%] items-center justify-center">
							<div className="absolute w-[20%] ">
								<img className="relative w-[90%] !top-[60px] !h-[600px] " src={imgmovil} alt={"Movil Image"} />
							</div>
						</div>
						<div className="w-[30%] max-h-[600px] h-[600px] flex flex-col">
							<div className="h-[300px] max-h-[300px] flex flex-col pt-[2rem]">
								{coments && coments.map((data: any) => <Comments data={data} />)}
							</div>
							<div className="h-[300px] max-h-[300px] flex flex-col pt-[2rem]">
								{networks && networks.map((data: any) => <Networks data={data} />)}
							</div>
						</div>

						<div></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BannerServices;
