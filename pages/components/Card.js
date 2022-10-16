
import React from "react";
import Image from "next/image";

export default function Card(props) {

    const title = props.title;
    const text = props.text;
    const img = props.img;

    return (
        <div className='col-span-1'>
            <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                <div className="rounded-lg shadow-xl bg-white relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                    <div className="flex absolute backface-hidden w-full h-full m-auto">
                        <Image src={img} layout='fill' objectFit="cover" className='rounded-t-lg' />
                        <div className="flex relative text-black rounded-md font-semibold m-auto leading-snug bg-opacity-80 bg-white w-3/4 h-[40%]">
                            <span className='opacity-100 m-auto text-center p-5'>{title}</span>
                        </div>
                    </div>
                    <div className="rounded-lg absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
                        <div className="text-center flex flex-col items-center justify-center h-full">
                        <h3 className="text-black">{title}</h3>
                            <p className="p-2 my-2 text-xs text-black">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*<div className='col-span-1'>
            <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                <div className="rounded-lg shadow-xl bg-white relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                    <div className="absolute backface-hidden w-full h-full text-center">
                        <Image src={img} className='rounded-t-lg' />
                        <h3 className="text-black font-semibold m-auto pt-5">{title}</h3>
                    </div>

                    <div className="rounded-lg absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
                        <div className="text-center flex flex-col items-center justify-center h-full">
                        <h3 className="text-black">{title}</h3>
                            <p className="p-2 my-2 text-xs text-black">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */