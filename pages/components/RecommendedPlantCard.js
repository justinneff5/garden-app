import Image from "next/image";
// import { useEffect, useState } from 'react';

export default function RecommendedPlantCard(props) {
    function makeUrl() {
        let url = `https://res.cloudinary.com/dkecm382m/image/fetch/${props.localPlant.image_link}`
        if (props.localPlant.image_link.startsWith('https://m.media-amazon')) url = props.localPlant.image_link;
        console.log(url);
        return url;
    }
    return (
        <div className="bg-green-300 w-full h-auto m-auto border-2 rounded-xl shadow-2xl cursor-pointer group prespective">
            <div className="relative w-full h-auto preserve-3d group-hover:my-rotate-y-180 duration-700">
                <div className="absolute backface-hidden h-72 w-full border-2 border-black">
                    <Image src={makeUrl()} alt='not loaded' layout='fill'/>
                </div>
                <div className="text-left w-full h-auto m-5 my-rotate-y-180 backface-hidden absolute flex flex-row bg-green-300 p-2">
                    <div className="w-full float-left pr-4 ml-4">
                        <h2 className=" border-b-2 pb-3 mb-5 text-black text-lg font-bold">{props.localPlant.name}</h2>
                        <div className="flex float-right w-1/2 text-black">
                            <div className=" w-full h-auto break-words">
                            <h4 className="font-semibold">Comments: </h4>
                                {props.localPlant.comments}
                            </div>
                        </div>
                        <p className="font-semibold text-black">
                            Ideal Exposure:{" "}
                            <div className=" text-black font-light">
                                {props.localPlant.exposure}
                            </div>
                        </p>
                        <p className="font-semibold text-black">
                            Ideal Moisture: <span className="font-light text-black">{props.localPlant.moisture}</span>
                        </p>
                        <p className="font-semibold text-black">
                            Mature Size:{" "}
                            <span className=" text-black font-light">{props.localPlant.mature_size}</span>
                        </p>

                        <p className="font-semibold text-black">
                            Blooming Season:{" "}
                            <span className=" text-black font-light">{props.localPlant.bloom}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}