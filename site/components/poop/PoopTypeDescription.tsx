import { useEffect, useState } from "react";

interface PoopTypeDescriptionProps {
    type?: number;
}
export default function PoopTypeDescription(props: PoopTypeDescriptionProps) {
    const [title, setTitle] = useState<string>('Please select a poop type');
    const [description, setDesc] = useState<string>('');

    useEffect(() => {
        switch (props.type) {
            case 1:
                setTitle('Severe Constipation');
                setDesc('Separate hard lumps');
                break;
            case 2:
                setTitle('Mild Constipation');
                setDesc('Lumpy and sausage like');
                break;
            case 3:
                setTitle('Normal');
                setDesc('A sausage shape with cracks in the surface');
                break;
            case 4:
                setTitle('Normal');
                setDesc('Like a smooth, soft sausage or snake');
                break;
            case 5:
                setTitle('Lacking Fibre');
                setDesc('Soft blobs with clear-cut edges');
                break;
            case 6:
                setTitle('Mild Diarrhea');
                setDesc('Mushy consistency with ragged edges');
                break;
            case 7:
                setTitle('Severe Diarrhea');
                setDesc('Liquid consistency with no solid pieces');
                break;

            default:
                setTitle('Please select a poop type');
                setDesc('');
                break;
        }
    }, [props.type]);
    return (<div className="h-full flex flex-col items-center place-content-between">
        <span>{title}</span>
        <span className="w-full h-12 bg-honeydew">image should go here</span>
        <span>{description}</span>
    </div>);
}