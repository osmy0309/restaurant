interface OpcionServicesProps {
	name: string;
	setValue: any;
	setSection: any;
	id: number;
}
function OpcionServices(props: OpcionServicesProps) {
	return (
		<>
			<div
				className="w-[60%]  shadow-3xl items-center justify-center mb-5 rounded-[8px] hover:bg-black hover:text-white cursor-pointer"
				onClick={() => {
					props.setValue(props.id);
					props.setSection(2);
				}}
			>
				<p className="text-center font-Roboto_Bold font-bold text-[16px] p-4  ">{props.name}</p>
			</div>
		</>
	);
}

export default OpcionServices;
