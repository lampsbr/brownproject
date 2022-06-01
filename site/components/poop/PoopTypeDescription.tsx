import Image from "next/image";
import { useEffect, useState } from "react";

interface PoopTypeDescriptionProps {
    type?: number;
}
export default function PoopTypeDescription(props: PoopTypeDescriptionProps) {
    const [title, setTitle] = useState<string>('Please select a poop type');
    const [description, setDesc] = useState<string>('');
    const [imgSrc, setImgSrc] = useState<string>('');

    useEffect(() => {
        switch (props.type) {
            case 1:
                setTitle('Severe Constipation');
                setDesc('Separate hard lumps');
                setImgSrc('/imgs/type 1.png')
                break;
            case 2:
                setTitle('Mild Constipation');
                setDesc('Lumpy and sausage like');
                setImgSrc('/imgs/type 2.png')
                break;
            case 3:
                setTitle('Normal');
                setDesc('A sausage shape with cracks in the surface');
                setImgSrc('/imgs/type 3.png')
                break;
            case 4:
                setTitle('Normal');
                setDesc('Like a smooth, soft sausage or snake');
                setImgSrc('/imgs/type 4.png')
                break;
            case 5:
                setTitle('Lacking Fibre');
                setDesc('Soft blobs with clear-cut edges');
                setImgSrc('/imgs/type 5.png')
                break;
            case 6:
                setTitle('Mild Diarrhea');
                setDesc('Mushy consistency with ragged edges');
                setImgSrc('/imgs/type 6.png')
                break;
            case 7:
                setTitle('Severe Diarrhea');
                setDesc('Liquid consistency with no solid pieces');
                setImgSrc('/imgs/type 7.png')
                break;

            default:
                setTitle('Please select a poop type');
                setDesc('');
                break;
        }
    }, [props.type]);
    return (<div className="h-full flex flex-col items-center place-content-between">
        <span className="h-8">{title}</span>
        <div className="relative w-40 h-40">

            {imgSrc &&
                <Image src={imgSrc} alt="Poop type ilustration"
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL="/placeholder_wiki.png"
                    loading="eager" />
            }
        </div>
        <span className="h-12">{description}</span>
    </div>);
}