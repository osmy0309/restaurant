import React from 'react';
import dayjs from 'dayjs';

import 'dayjs/locale/de';//zh-cn

import { Calendar, Col, Row, Select, theme } from 'antd';
import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';
import { MONTHS_CONST } from '../../utils/constants/months';
import './calendar.css';

dayjs.extend(dayLocaleData);
interface CustomCalendarProps {
    value:string;
    setValue: (value: string) => void;
    month:number;
    setMonth:(value:number)=>void;
}


const CustomCalendar: React.FC<CustomCalendarProps> = ({ value,setValue,month,setMonth }) => {
    const { token } = theme.useToken();
    const onSelectChange = (value: Dayjs) => {
        console.log("V",value);
        
        setValue(value.format("YYYY-MM-DD"));
        setMonth(0);
    };

   const wrapperStyle: React.CSSProperties = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };
    console.log("Value :",value);
    var today = new Date(value);
    today.toLocaleString('en-US', { timeZone: 'America/Havana' })
    //today.setDate(today.getDay()+1)
    today.setMonth(today.getMonth() + month);
    const currentDate = dayjs(today);
    console.log("Current :",currentDate.format("YYYY-MM-DD"));
    
    return (
        <div style={wrapperStyle}>
            
            <Calendar
                fullscreen={false}
                value={currentDate}
                headerRender={({ value, onChange }) => {
                    const monthOptions = [];
                    const year = value.year();
                    const month = value.month();
                    for (let i = 0; i < MONTHS_CONST.length; i++) {
                        monthOptions.push(
                            <Select.Option key={i} value={i} className="month-item">
                                {`${MONTHS_CONST[i].name} ${year}`}
                            </Select.Option>,
                        );
                    }
                    
                    return (
                        <div style={{ padding: 8 }}>
                            <Row gutter={8}>
                                <Col span={12} offset={6}>
                                    <Select
                                        style={{ border: '0px' }}
                                        size="large"
                                        value={month}
                                        onChange={(newMonth) => {
                                            const now = value.clone().month(newMonth);
                                            onChange(now);
                                        }}
                                    >
                                        {monthOptions}
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                    );
                }}
                onSelect={onSelectChange}
            />
           
        </div>
    );
};

export default CustomCalendar;