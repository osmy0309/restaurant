import { useState } from "react";
import "./textfield.css";
interface SelectOptionsProps {
	placeholder?: string;
	value: string;
	name?: string;
	onChange: (value: string) => void;
	options:Array<object>;
	label?: string;
	styleClass?: string;
	disabled?: boolean;
	required?: boolean;
}

export default function SelectOptions(props: SelectOptionsProps) {
	const [validationErrors, _] = useState([]);
	const [visiblelabel, setVisibleLabel] = useState(false);

	const onChange = (value: string) => {
		props.onChange(value);
	};

	return (
		<label className=" text-accent-color flex flex-col gap-1 w-full">
			<div className={`${!visiblelabel ? "hidden" : ""} animate-fade-up animate-ease-linear `}>{props.label}</div>
			{props.required && <span className="text-[#ff0000]">*</span>}
			<select
				//required={props.required}
				disabled={props.disabled}
				className={`placeholder-bold ${props.styleClass}  border-[1px] ${
					validationErrors.length > 0 ? "border-red-600" : "border-[#1F0B01] border-b-2 border-x-0 border-t-0 pl-1 h-[3rem]"
				}  text-black font-normal outline-none`}
				name={props.name}
				defaultValue={"pepe"}
				onChange={(e) => onChange(e.target.value)}
				onClick={() => !visiblelabel && setVisibleLabel(true)}
			>
				{
					props?.options.length > 0 && props.options.map((o,i)=>(
						<option value={`value-${1}`}>{`Opcion ${i}`}</option>
					))
				}
			</select>
			{validationErrors.length > 0 && <p className="text-xs text-red-600 font-normal">{validationErrors[0]}</p>}
		</label>
	);
}
