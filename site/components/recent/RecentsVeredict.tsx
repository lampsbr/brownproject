import { useEffect, useState } from "react";

interface RecentsVeredictProps {
    types: number[];
}

export default function RecentsVeredict(props: RecentsVeredictProps) {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        if (props.types && props.types.length > 0) {
            const poopsByQuality = [0, 0, 0, 0, 0, 0, 0, 0];
            props.types.forEach(poo => {
                poopsByQuality[poo] += 1;
            });
            const goodPoops = poopsByQuality[4];
            const avgPoops = poopsByQuality[5] + poopsByQuality[3];
            const badPoops =
                poopsByQuality[1] +
                poopsByQuality[2] +
                poopsByQuality[6] +
                poopsByQuality[7];
            setText('' +
                (goodPoops / props.types.length) * 100 +
                '% good, ' +
                (avgPoops / props.types.length) * 100 +
                '% average and ' +
                (badPoops / props.types.length) * 100 +
                '% bad poops.');
        }
    }, []);

    return <span>{text}</span>;
}