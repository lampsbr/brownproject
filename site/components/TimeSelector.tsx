import { useState } from 'react';
import DatePicker from 'react-datepicker';

interface TimeProps {
    time: Date;
    setTime(_: any): any | void;
}
export default function TimeSelector(props: TimeProps) {
    const [currentDay, setCurrentDay] = useState<number>(0);

    const setDay = (d: number) => {
        props.setTime(t => { 
            t.setDate(t.getDate() + (Math.abs(currentDay) + d)); 
            return t; 
        });
        setCurrentDay(d);
    }

    return (
        <div className="flex flex-col justify-center">
            <DatePicker
                className="w-10/12 mx-[10%]"
                selected={props.time}
                onChange={(date) => props.setTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
            />
            <div className="w-10/12 bg-darkliver rounded-2xl mt-2 flex flex-col mx-auto border border-darkliver">
                <button className={`text-honeydew hover:bg-tumbleweed  rounded-t-2xl`} onClick={(e) => { e.preventDefault(); setDay(0); }}>Today</button>
                <button className={`text-honeydew hover:bg-tumbleweed `} onClick={(e) => { e.preventDefault(); setDay(-1); }}>Yesterday</button>
                <button className={`text-honeydew hover:bg-tumbleweed rounded-b-2xl`} onClick={(e) => { e.preventDefault(); setDay(-2); }}>The day before</button>
            </div>
        </div>
    );
}