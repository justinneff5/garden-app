import React from "react";
import Image from "next/image";
import gardenImage from "./assets/images/garden.png";
import plantImage from "./assets/images/plant.png";
import waterPollution from "./assets/images/wpollution.jpg";


export default function Cards() {
    return (
        <div className='w-4/5 h-auto p-1 m-auto'>
            <div class="grid grid-col-4 grid-flow-col gap-4 justify-between pb-5">
                <div class="col-span-1">
                    <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                            <div className="absolute backface-hidden border-2 w-full h-full text-center">
                                <Image src={waterPollution} />
                                <h3 className="text-black m-auto pt-5">Reduce Flooding</h3>
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
                <div className='col-span-1'>
                    <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                            <div className="absolute backface-hidden border-2 w-full h-full text-center">
                                <Image src={waterPollution} />
                                <h3 className="text-black m-auto pt-5">Reduce Flooding</h3>
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
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                            <div className="absolute backface-hidden border-2 w-full h-full text-center">
                                <Image src={waterPollution} />
                                <h3 className="text-black m-auto pt-5">Reduce Flooding</h3>
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
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                            <div className="absolute backface-hidden border-2 w-full h-full text-center">
                                <Image src={waterPollution} />
                                <h3 className="text-black m-auto pt-5">Reduce Flooding</h3>
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
            </div>

            <div class="grid grid-col-4 grid-flow-col gap-4 justify-between">
                <div class="col-span-1">
                    <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective">
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                            <div className="absolute backface-hidden border-2 w-full h-full text-center">
                                <Image src={waterPollution} className='rounded-lg'/>
                                <h3 className="text-black m-auto pt-5">Reduce Flooding</h3>
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
                <div className='col-span-1'>
                    <div className="w-[250px] h-[250px] bg-transparent cursor-pointer group prespective rounded-md">
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                            <div className="absolute backface-hidden border-2 w-full h-full text-center">
                                <Image src={waterPollution} />
                                <h3 className="text-black m-auto pt-5">Reduce Flooding</h3>
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
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                            <div className="absolute backface-hidden border-2 w-full h-full text-center">
                                <Image src={waterPollution} />
                                <h3 className="text-black m-auto pt-5">Reduce Flooding</h3>
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
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
                            <div className="absolute backface-hidden border-2 w-full h-full text-center">
                                <Image src={waterPollution} />
                                <h3 className="text-black m-auto pt-5">Reduce Flooding</h3>
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
            </div>
        </div>
    );
}