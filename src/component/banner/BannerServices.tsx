interface BannerServicesProps {
	image: string;
	title: string;
	description: string;
}
function BannerServices({image="images/banner/banner-Servicios.png",title="Titulo",description="Descripcion del servicio"}:Partial<BannerServicesProps>) {
	return (
		<>
			<div className=" w-full !h-[600px]">
				<img className="w-full h-full rounded-t-[20px]" src={image} alt={"Banner"} />
				<div className="fixed t-20px left-0px">
				<div>{title}</div>
				<div>{description}</div>
				</div>
			</div>
		</>
	);
}

export default BannerServices;
