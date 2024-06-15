interface SelectProps {
	label?: string;
	onChange: (value: string) => void;
	options: OptionProps[];
	styleClass?: string;
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
}

interface OptionProps {
	value: string;
	option: string;
}

export default function Select(props: SelectProps) {
	return (
		<label className="flex flex-col gap-1 w-full">
			<p className="font-semibold text-sm text-accent-color">
				{props.label}
				{props.required && "*"}
			</p>
			<select
				required={props.required}
				onChange={(e) => props.onChange(e.target.value)}
				disabled={props.disabled}
				name={props.name}
				className={`${props.styleClass}  disabled:brightness-95 py-3 px-5 text-sm outline-none border-[1px] border-[#C2C1C1] rounded-xl `}
				defaultValue="placeholder"
			>
				{props.placeholder && (
					<option value="placeholder" hidden>
						{props.placeholder}
					</option>
				)}
				{props.options.map((option) => (
					<option className="text-base" key={option.value} value={option.value} onClick={() => props.onChange(option.value)}>
						{option.option}
					</option>
				))}
			</select>
		</label>
	);
}
