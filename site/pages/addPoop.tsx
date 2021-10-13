import { useState } from "react";
import PoopTypeDescription from "../components/poop/PoopTypeDescription";

/**
 * let's try a 60/40 layout. Bigger area for poop type, smaller for datetime.
 * Layout can be a flex that alternates direction in lg screens
 */
export default function AddPoop() {
    const [selectedType, setSelectedType] = useState<number>();
    const [t1Class, setT1Class] = useState<string>('');
    const [t2Class, setT2Class] = useState<string>('');
    const [t3Class, setT3Class] = useState<string>('');
    const [t4Class, setT4Class] = useState<string>('');
    const [t5Class, setT5Class] = useState<string>('');
    const [t6Class, setT6Class] = useState<string>('');
    const [t7Class, setT7Class] = useState<string>('');

    const setType = (t: number) => {
        setSelectedType(t);
        setT1Class('');
        setT2Class('');
        setT3Class('');
        setT4Class('');
        setT5Class('');
        setT6Class('');
        setT7Class('');
        switch (t) {
            case 1:
                setT1Class('bg-tumbleweed');
                break;
            case 2:
                setT2Class('bg-tumbleweed');
                break;
            case 3:
                setT3Class('bg-tumbleweed');
                break;
            case 4:
                setT4Class('bg-tumbleweed');
                break;
            case 5:
                setT5Class('bg-tumbleweed');
                break;
            case 6:
                setT6Class('bg-tumbleweed');
                break;
            case 7:
                setT7Class('bg-tumbleweed');
                break;
            default:
                break;
        }
    }

    return (
        <>
            <h2 className="text-center text-3xl mb-2">Log your poop</h2>
            <div className="w-full flex flex-col md:flex-row" >
                <div id="poopTypeSelector" className="w-full md:w-3/5 border border-honeydew flex flex-row p-3 bg-tumbleweed">
                    <div className="bg-darkliver rounded-2xl w-40 flex flex-col mr-3 border border-darkliver">
                        <button className={`text-honeydew hover:bg-tumbleweed ${t1Class} rounded-t-2xl`} onClick={(e) => { e.preventDefault(); setType(1); }}>Type 1</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${t2Class}`} onClick={(e) => { e.preventDefault(); setType(2); }}>Type 2</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${t3Class}`} onClick={(e) => { e.preventDefault(); setType(3); }}>Type 3</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${t4Class}`} onClick={(e) => { e.preventDefault(); setType(4); }}>Type 4</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${t5Class}`} onClick={(e) => { e.preventDefault(); setType(5); }}>Type 5</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${t6Class}`} onClick={(e) => { e.preventDefault(); setType(6); }}>Type 6</button>
                        <button className={`text-honeydew hover:bg-tumbleweed ${t7Class} rounded-b-2xl`} onClick={(e) => { e.preventDefault(); setType(7); }}>Type 7</button>
                    </div>
                    <div className="w-full p-4"><PoopTypeDescription type={selectedType} /></div>
                </div>
                <div id="timestampSelector" className="w-full md:w-2/5 border border-honeydew bg-tumbleweed">
                </div>
            </div>
        </>
    );
}