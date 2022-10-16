import Image from 'next/image';
import { useState } from 'react';

export default function PlantSearchElement(props) {
    //console.log(props);
    const [sComment, setSComment] = useState(false);
    function logInfo() {
        console.log(props.localPlant);
    }
    function makeUrl() {
        let url = `https://res.cloudinary.com/demo/image/fetch/${props.localPlant.image_link}`
        if (props.localPlant.image_link.startsWith('https://m.media-amazon')) url = props.localPlant.image_link;
        return url;
    }

    function showComment() {
        setSComment(true);
    }

    return (
        <div className="h-full w-full flex justify-left gap-2 bg-green-100 rounded-md transform hover:scale-102">
            <div className="h-auto my-1 ml-1 mr-2 w-24 object-cover relative">
                <Image src={makeUrl()} alt="No Img Available :(" layout="fill" className="border-2 border-blue-500 absolute top-2 left-2" />
            </div>
            <div className="flex-none w-40 h-auto text-left leading-tight mt-0.5">
                <div className="h-auto w-full">{props.localPlant.name}</div>
                <div className="h-auto w-full text-xs whitespace-nowrap"><span className="font-bold mr-1">Exposure:</span>{props.localPlant.exposure}</div>
                <div className="h-atuo w-full text-xs whitespace-nowrap"><span className="font-bold mr-1">Moisture:</span>{props.localPlant.moisture}</div>
                <div className="flex">
                    <div className="h-auto w-full text-xs truncate overflow-hidden pr-3"><span className="font-bold mr-1">Comments:</span>{props.localPlant.comments}</div>
                    <button className="w-4 h-4 my-auto transform rotate-90">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                
            </div>
        </div>
    )
}