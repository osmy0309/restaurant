import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
// @ts-ignore
import type { Dayjs } from "dayjs";
//
const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
	console.log(value.format("YYYY-MM-DD"), mode);
};

const CalendarForm: React.FC = () => {
	const { token } = theme.useToken();

	const wrapperStyle: React.CSSProperties = {
		width: 300,
		border: `1px solid ${token.colorBorderSecondary}`,
		borderRadius: token.borderRadiusLG,
	};

	return (
		<div style={wrapperStyle}>
			<Calendar fullscreen={false} onPanelChange={onPanelChange} />
		</div>
	);
};

export default CalendarForm;
