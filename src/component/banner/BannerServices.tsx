interface BannerServicesProps {
	image: string;
	title: string;
	description: string;
}
function BannerServices({ image = "images/banner/banner-Servicios.png" }: Partial<BannerServicesProps>) {
	return (
		<>
			<div className=" w-full !h-[600px]">
				<img className="w-full h-full rounded-t-[20px]" src={image} alt={"Banner"} />
			</div>
		</>
	);
}

export default BannerServices;
