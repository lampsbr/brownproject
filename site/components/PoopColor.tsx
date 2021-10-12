import { useEffect, useState } from "react";

interface PoopColorProps {
    types: number[];
    index: number;
}

const typeToClass = (type: number, prefix: string) => {
    return type === 1 ? prefix+'-red-600' :
        type === 2 ? prefix+'-red-400' :
            type === 3 ? prefix+'-green-400' :
                type === 4 ? prefix+'-green-400' :
                    type === 5 ? prefix+'-yellow-300' :
                        type === 6 ? prefix+'-red-400' :
                            type === 7 ? prefix+'-red-600' : prefix+'-gray-400';
}

export default function PoopColor(props: PoopColorProps) {
    const prev = props.index > 0 ? props.types[props.index - 1] : props.types[0];
    const current = props.types[props.index];
    const [gradient, setGradient] = useState<string>('');

    useEffect(() => {
        let grad = 'bg-gradient-to-b ';
        grad += typeToClass(prev, 'from');
        grad += ' ';
        grad += typeToClass(current, 'via');
        grad += ' ';
        grad += typeToClass(current, 'to');
        setGradient(grad);
    }, []);

    return <>
    <div className={`inline-block w-8 h-full ${props.index === 0 ? 'mt-3' : ''} ${gradient}`} >
        </div>
    </>;
}