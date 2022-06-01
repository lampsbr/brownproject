import { useState } from "react";
import PoopTypeDescription from "../components/poop/PoopTypeDescription";
import TimeSelector from "../components/TimeSelector";
import "react-datepicker/dist/react-datepicker.css";
import Link from 'next/link';

/**
 * let's try a 60/40 layout. Bigger area for poop type, smaller for datetime.
 * Layout can be a flex that alternates direction in lg screens
 */
export default function AddPoop() {
    const [selectedType, setSelectedType] = useState<number>();
    const [selectedTS, setSelectedTS] = useState<Date>(new Date());

    /**
     * Saves poop.
     * @since 20220423
     */
    const savePoop = () => {
        //lock screen
        // check data
        // perform request
        //toast
        //unlock screen
    }

    const setType = (t: number) => {
        setSelectedType(t);
    }

    return (
        <>
            <h2 className="text-center text-3xl mb-2">Log your poop</h2>
            <div className="w-full flex flex-col md:flex-row" >
                <div id="poopTypeSelector" className="w-full md:w-3/5 border border-honeydew flex flex-row p-3 bg-tumbleweed">
                    <div className="bg-darkliver rounded-2xl w-40 flex flex-col mr-3 border border-darkliver justify-between">
                        <button className={`text-honeydew hover:bg-tumbleweed ${selectedType === 1 ? 'bg-tumbleweed' : ''} rounded-t-2xl`} onClick={(e) => { e.preventDefault(); setType(1); }}>Type 1</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${selectedType === 2 ? 'bg-tumbleweed' : ''}`} onClick={(e) => { e.preventDefault(); setType(2); }}>Type 2</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${selectedType === 3 ? 'bg-tumbleweed' : ''}`} onClick={(e) => { e.preventDefault(); setType(3); }}>Type 3</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${selectedType === 4 ? 'bg-tumbleweed' : ''}`} onClick={(e) => { e.preventDefault(); setType(4); }}>Type 4</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${selectedType === 5 ? 'bg-tumbleweed' : ''}`} onClick={(e) => { e.preventDefault(); setType(5); }}>Type 5</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${selectedType === 6 ? 'bg-tumbleweed' : ''}`} onClick={(e) => { e.preventDefault(); setType(6); }}>Type 6</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${selectedType === 7 ? 'bg-tumbleweed' : ''} rounded-b-2xl`} onClick={(e) => { e.preventDefault(); setType(7); }}>Type 7</button>
                    </div>
                    <div className="w-full p-4"><PoopTypeDescription type={selectedType} /></div>
                </div>
                <div id="timestampSelector" className="w-full md:w-2/5 border border-honeydew bg-tumbleweed flex justify-between py-4">
                    <div className="m-auto">
                        <TimeSelector time={selectedTS} setTime={setSelectedTS} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className="rounded-full mt-2 h-16 px-5 bg-darkliver text-honeydew shadow-lg"
                    onClick={(e) => { e.preventDefault(); savePoop(); }}
                >
                    Save
                </button>
            </div>

        </>
    );
}