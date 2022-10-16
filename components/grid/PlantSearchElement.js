import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function PlantSearchElement(props) {
    //console.log(props);
    function logInfo() {
        console.log(props.localPlant);
    }
    function makeUrl() {
        let url = `https://res.cloudinary.com/dkecm382m/image/fetch/${props.localPlant.image_link}`
        if (props.localPlant.image_link.startsWith('https://m.media-amazon')) url = props.localPlant.image_link;
        return url;
    }

    function showComment() {
        setSComment(true);
    }

    function displayName(name) {
        let arr = name.split(' ');
        return arr.map(element => { return element.charAt(0).toUpperCase() + element.slice(1) }).join(' ');
    }

    return (
        <div className="h-full w-full flex justify-left gap-2 rounded-md transform hover:scale-102 p-1">
            <div className="h-auto w-24 my-0.5 ml-1 mr-2 object-cover relative">
                <Image src={makeUrl()} alt="No Img Available :(" layout="fill" className="border-2 border-blue-500 absolute top-2 left-2" />
            </div>
            <div className="flex-none w-auto flex-grow h-auto text-left leading-tight mt-0.5 mr-2">
                <div className="h-auto w-full">{displayName(props.localPlant.name)}</div>
                <div className="h-auto w-full text-xs whitespace-nowrap"><span className="font-bold mr-1">Exposure:</span>{props.localPlant.exposure}</div>
                <div className="h-auto w-full text-xs whitespace-nowrap"><span className="font-bold mr-1">Moisture:</span>{props.localPlant.moisture}</div>
            </div>
        </div>
    )
}