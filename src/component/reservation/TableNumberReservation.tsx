interface TableProps {
	setPeople: any;
	people: number;
}
function TableReservation(props: TableProps) {
	return (
		<>
			<div className="flex flex-col w-full">
				<div className="flex flex-col !justify-start !items-start w-full">
					<p className="font-Roboto pb-2 text-[#1F0B01]">Cantidad de personas</p>
					<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full px-[5rem]">
						<div
							className={`${props.people == 1 ? "opacity-[50%]" : "hover:cursor-pointer"}`}
							onClick={() => {
								if (props.people > 1) {
									props.setPeople(props.people - 1);
								}
							}}
						>
							<img src="/images/reserve/row.png" className="w-[20px] !h-[20px] hover:cursor-pointer" />
						</div>
						<p className="text-center font-bold text-[20px] px-[20px]">{props.people}</p>
						<div className="text-center font-bold text-[25px] hover:cursor-pointer" onClick={() => props.setPeople(props.people + 1)}>
							<img src="/images/reserve/row.png" className="rotate-180 w-[20px] !h-[20px] hover:cursor-pointer" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TableReservation;
