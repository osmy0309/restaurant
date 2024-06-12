import { useState } from "react";

interface ClockProps {
	hour: number;
	setHour: any;
	setMinutes: any;
	minutes: number;
	am_pm: number;
	setAm_Pm: any;
}
function ClockReservation(props: ClockProps) {
	const handleInputChangeHour = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const parsedValue = parseInt(value, 10);
		if (!isNaN(parsedValue)) {
			props.setHour(parsedValue);
		}
		if (parsedValue < 1 || parsedValue > 12) props.setHour(1);
	};
	const handleInputChangeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const parsedValue = parseInt(value, 10);
		if (!isNaN(parsedValue)) {
			props.setMinutes(parsedValue);
			if (parsedValue < 0 || parsedValue > 59) props.setMinutes(59);
		}
	};
	const formatNumber = (num: any) => {
		return num.toString().padStart(2, "0");
	};
	return (
		<>
			<div>
				<p className="font-Roboto pb-2 text-[#1F0B01]">Selecciona la hora</p>
				<div className="flex w-full gap-3  border-[1px] shadow-3xl p-3 rounded-[20px]">
					<div className="flex flex-col  w-[20%] items-center justify-center gap-1">
						<div
							className={`${props.hour == 12 ? "opacity-[50%]" : "hover:cursor-pointer"}`}
							onClick={() => {
								if (props.hour < 12) {
									props.setHour(props.hour + 1);
								}
							}}
						>
							<img src="/images/reserve/row.png" className="w-[20px] rotate-90 !h-[20px] hover:cursor-pointer" />
						</div>
						<input
							className={`w-full placeholder-bold    text-center font-Roboto_Bold text-[25px]
						}  text-black font-normal outline-none`}
							name={"props.name"}
							placeholder={""}
							value={formatNumber(props.hour)}
							onChange={handleInputChangeHour}
							type="text"
							min="1"
							max="12"
						/>
						<div
							className={`${props.hour == 1 ? "opacity-[50%]" : "hover:cursor-pointer"}`}
							onClick={() => {
								if (props.hour > 1) {
									setHour(props.hour - 1);
								}
							}}
						>
							<img src="/images/reserve/row.png" className="w-[20px] -rotate-90 !h-[20px] hover:cursor-pointer" />
						</div>
					</div>
					<div className="flex font-Roboto_Bold text-[25px] justify-center w-[10%] items-center">:</div>
					<div className="flex flex-col  w-[20%] items-center justify-center gap-1">
						<div
							className={`$props.{minutes == 59 ? "opacity-[50%]" : "hover:cursor-pointer"}`}
							onClick={() => {
								if (props.minutes < 59) {
									props.setMinutes(props.minutes + 1);
								}
							}}
						>
							<img src="/images/reserve/row.png" className="w-[20px] rotate-90 !h-[20px] hover:cursor-pointer" />
						</div>
						<input
							className={`w-full placeholder-bold    text-center font-Roboto_Bold text-[25px]
						}  text-black font-normal outline-none`}
							name={"props.name"}
							placeholder={""}
							value={formatNumber(props.minutes)}
							onChange={handleInputChangeMinutes}
							type="text"
							min="0"
							max="59"
						/>
						<div
							className={`${props.minutes == 0 ? "opacity-[50%]" : "hover:cursor-pointer"}`}
							onClick={() => {
								if (props.minutes > 0) {
									props.setMinutes(props.minutes - 1);
								}
							}}
						>
							<img src="/images/reserve/row.png" className="w-[20px] -rotate-90 !h-[20px] hover:cursor-pointer" />
						</div>
					</div>
					<div className="flex gap-8 w-[50%] justify-center items-center font-Roboto_Bold">
						<p className={`${props.am_pm == 0 ? "opacity-[100%]" : "opacity-[50%]"} hover:cursor-pointer`} onClick={() => props.setAm_Pm(0)}>
							AM
						</p>
						<p className={`${props.am_pm == 1 ? "opacity-[100%]" : "opacity-[50%]"} hover:cursor-pointer`} onClick={() => props.setAm_Pm(1)}>
							PM
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ClockReservation;
