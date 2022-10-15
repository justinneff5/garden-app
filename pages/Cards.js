import React from "react";
import Image from "next/image";
import waterPollution from "./assets/images/wpollution.jpeg"

export default function Cards() {
    return (
        <div className="text-lg bg-cover bg-[url('https://imgs.search.brave.com/oYrC62mbCxJnchxBNsb8PREVVsItRUccmgbZkH2gMwY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyMDAwLzEq/WHNCMGhZdzIxci1P/VWxwajJqdHRXdy5q/cGVn')] p-12">
            <div className='w-4/5 h-auto p-1 m-auto'>
                <div class="grid grid-col-4 grid-flow-col gap-4 justify-between pb-5">
                    <div class="col-span-1">
                        <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                            <div className="shadow-xl bg-white relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                                <div className="absolute backface-hidden w-full h-full text-center">
                                    <Image src={waterPollution} />
                                    <h3 className="text-black font-semibold m-auto pt-5">Prevent water pollution</h3>
                                </div>
                                <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
                                    <div className="text-center flex flex-col items-center justify-center h-full">
                                        <h3 className="text-black">Prevent water pollution</h3>
                                        <p className="p-2 my-2 text-xs text-black">
                                            Soaking up the rain helps keep rain water on-site and reduce the polluted runoff flowing into our streets and local waterways.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                            <div className="shadow-xl bg-white relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                                <div className="absolute backface-hidden w-full h-full text-center">
                                    <Image src={waterPollution} />
                                    <h3 className="text-black font-medium m-auto pt-5">Reduce Flooding</h3>
                                </div>
                                <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
                                    <div className="text-center flex flex-col items-center justify-center h-full">
                                    <h3 className="text-black">Reduce flooding</h3>
                                        <p className="p-2 my-2 text-xs text-black">
                                            When heavy rain falls, the runoff that flows into the street
                                            can back up and cause street flooding. When we soak up the
                                            rain we help reduce the amount of water that flows from our
                                            properties into the street and the stormwater system.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                            <div className="shadow-xl bg-white relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                                <div className="absolute backface-hidden   w-full h-full text-center">
                                    <Image src={waterPollution} />
                                    <h3 className="text-black font-medium m-auto pt-5">Protect our water resources</h3>
                                </div>

                                <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
                                    <div className="text-center flex flex-col items-center justify-center h-full">
                                    <h3 className="text-black">Protect our water resources</h3>
                                        <p className="p-2 my-2 text-xs text-black">
                                            When we soak up the rain we help get water into the ground. This helps to keep our streams and rivers flowing and replenish the groundwater we rely on for drinking water and other uses. By reducing the rush of stormwater flowing downstream we’re also helping to reduce soil and stream bank erosion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-1">
                        <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                            <div className="shadow-xl bg-white relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                                <div className="absolute backface-hidden   w-full h-full text-center">
                                    <Image src={waterPollution} />
                                    <h3 className="text-black font-medium m-auto pt-5">Climate resiliency</h3>
                                </div>

                                <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
                                    <div className="text-center flex flex-col items-center justify-center h-full">
                                    <h3 className="text-black">Climate resiliency</h3>
                                        <p className="p-2 my-2 text-xs text-black">
                                         As different parts of the country become drier, wetter or hotter, green infrastructure practices can help communities improve their resiliency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-col-4 grid-flow-col gap-4 justify-between">
                    <div class="col-span-1">
                        <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective">
                            <div className="shadow-xl bg-white relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                                <div className="absolute backface-hidden   w-full h-full text-center">
                                    <Image src={waterPollution}/>
                                    <h3 className="text-black font-medium m-auto pt-5">Beautify neighborhoods</h3>
                                </div>

                                <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
                                    <div className="text-center flex flex-col items-center justify-center h-full">
                                        <h3 className="text-black">Beautify neighborhoods</h3>
                                        <p className="p-2 my-2 text-xs text-black">
                                            When we soak up the rain with trees and rain gardens in our yards and in our cities, we're adding beauty to the landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                            <div className="shadow-xl bg-white relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                                <div className="absolute backface-hidden w-full h-full text-center">
                                    <Image src={waterPollution} />
                                    <h3 className="text-black font-medium m-auto pt-5">Cool the air</h3>
                                </div>

                                <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
                                    <div className="text-center flex flex-col items-center justify-center h-full">
                                    <h3 className="text-black">Cool the air</h3>
                                        <p className="p-2 my-2 text-xs text-black">
                                         When we soak up the rain by planting trees and other plants in our urban neighborhoods we're helping to cool the air and reduce urban heat islands.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                            <div className="shadow-xl bg-white relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                                <div className="absolute backface-hidden   w-full h-full text-center">
                                    <Image src={waterPollution} />
                                    <h3 className="text-black font-medium m-auto pt-5">Save money</h3>
                                </div>

                                <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
                                    <div className="text-center flex flex-col items-center justify-center h-full">
                                    <h3 className="text-black">Save money</h3>
                                        <p className="p-2 my-2 text-xs text-black">
                                            When we soak up the rain and reduce the runoff that flows to the street, we reduce the water to be handled by the town drainage systems. This can help lower community costs for managing this water. Green roofs can lower building energy costs; permeable pavements can lower construction costs for residential and commercial development by reducing the need for some conventional drainage features.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-1">
                        <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                            <div className="shadow-xl bg-white relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                                <div className="absolute backface-hidden   w-full h-full text-center">
                                    <Image src={waterPollution} />
                                    <h3 className="text-black font-medium m-auto pt-5">Create habitat</h3>
                                </div>

                                <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
                                    <div className="text-center flex flex-col items-center justify-center h-full">
                                    <h3 className="text-black">Create habitat</h3>
                                        <p className="p-2 my-2 text-xs text-black">
                                         When we plant trees, grasses and flowering perennials, especially native plants suitable for the area, we create habitat for birds and insects such as butterflies, bees and other pollinators.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}