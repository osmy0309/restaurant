import { Calendar, theme } from "antd";
// @ts-ignore
import type { Dayjs } from "dayjs";
//


interface CalendarProps {
	setValue:(value:string) => void
}

const CalendarForm: React.FC<CalendarProps> = ({setValue}) => {
	const { token } = theme.useToken();
	const onSelectChange = (value: Dayjs) => {
		setValue(value.format("YYYY-MM-DD"));
	};
	const wrapperStyle: React.CSSProperties = {
		width: 300,
		border: `1px solid ${token.colorBorderSecondary}`,
		borderRadius: token.borderRadiusLG,
	};

	return (
		<div style={wrapperStyle}>
			<Calendar fullscreen={false} onSelect={onSelectChange}/>
		</div>
	);
};

export default CalendarForm;
