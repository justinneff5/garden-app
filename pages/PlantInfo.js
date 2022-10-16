import React from "react";
import Image from "next/image";
import plantImage from "./assets/images/plant.png";

export default function PlantInfo() {
    return (
        <div className="w-2/3 h-[340px] p-1 m-auto ">
            <div className="rounded-sm w-10 bg-green-700 m-auto">
                <input
                    id="fileSelect"
                    type="file"
                    multiple
                    className="input text-black bg-green-500"
                    onChange={(e) => handleFileSelect(e)}
                />
            </div>

            <div className="bg-green-100 h-auto m-auto border-2 flex flex-row rounded-xl shadow-2xl">
                <div className="p-5 flex w-1/2 h-auto">
                    <Image src={plantImage} />
                </div>

                <div className="text-left w-1/2 m-5">
                    <div className="">
                        <h2 className=" border-b-2 pb-3 mb-5 text-black">Plant Info</h2>
                        <p className="font-semibold text-black">
                            Name: <span className="text-black font-light">Marigold</span>
                        </p>
                        <p className="font-semibold text-black">
                            Description:{" "}
                            <span className=" text-black font-light">
                                This is very popular
                            </span>
                        </p>
                        <p className="font-semibold text-black">
                            Propagation: <span className="font-light text-black">Seeds</span>
                        </p>
                        <p className="font-semibold text-black">
                            Link:{" "}
                            <a className="text-blue-300" href="#">
                                Click Here
                            </a>
                        </p>
                    </div>
                    <div className="pb-3 mt-10">
                        <h2 className="border-b-2 pb-3 mb-5 text-black">Plant Health</h2>
                        {/* This is the start of the task bar */}
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                                        Health
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span class="text-xs font-semibold inline-block text-pink-600">
                                        30%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                                <div
                                    
                                    class="w-[80%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                                ></div>
                            </div>
                        </div>
                        {/* This is the end of the taskbar */}
                        <p className="font-semibold text-black">
                            Probability of Health:{" "}
                            <span className="text-black font-light">98.45%</span>
                        </p>
                        <p className="font-semibold text-black">Diseases: </p>
                        <div className="text-black">
                            <h3>
                                Disease name:<span>Mo</span>
                            </h3>
                            <ul className="list-disc ml-10 text-black">
                                <li>Description</li>
                                <li>Treatment</li>
                                <li>
                                    <a>Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
