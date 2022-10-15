import React from "react";
import Image from "next/image";
import gardenImage from "./assets/images/garden.png";
import plantImage from "./assets/images/plant.png";
import waterPollution from "./assets/images/wpollution.jpg";

export default function Main() {
  return (
    <div className="p-1 w-full flex justify-center items-center">
      <div className="p-1 w-full flex mt-10 justify-center items-center">
        <div className="w-[300px] h-[300px] bg-transparent cursor-pointer group prespective rounded-md">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
            <div className="absolute backface-hidden border-2 w-full h-full text-center">
              <Image src={waterPollution} />
              <h3 className="text-black m-auto pt-5">Reduce Flooding</h3>
            </div>

            <div className="absolute my-rotate-y-180 w-full backface-hidden h-full bg-gray-100">
              <div className="text-center flex flex-col items-center justify-center h-full">
                <h1 className="text-black">Reduce flooding</h1>
                <p className="p-2 my-2 text-black">
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

      {/* <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4">
                <h1 className="text-4xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-2 md:text-5xl md:grid-cols-3">
                    <span className="md:col-span-2 text-black">Why Rain gardens?</span>
                </h1>

                <p className='xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12'>This is why</p>

                <div className='h-8 xs:h-auto xs:square bg-transparent cursor-pointer group prespective rounded-md'>
                    <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full duration-700'>
                        <div className="absolute backface-hidden border-2 w-full text-center">
                            <Image src={waterPollution} />
                            <h3 className='text-black m-auto pt-5'>Reduce Flooding</h3>
                        </div>
                        <div className='absolute my-rotate-y-180 w-full backface-hidden bg-gray-100'>
                            <div className='text-center flex flex-col items-center justify-center'>
                                <h3 className='text-black'>Reduce flooding</h3>
                                <p className='p-2 my-2 text-black'>When heavy rain falls, the runoff that flows into the street can back up and cause street flooding.
                                    When we soak up the rain we help reduce the amount of water that flows from our properties into the street and the stormwater system.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-8 bg-blue-500 xs:h-auto xs:square'></div>
                <div className='h-8 bg-blue-500 xs:h-auto xs:square'></div>
                <div className='h-8 bg-blue-500 xs:h-auto xs:square'></div>
                <div className='h-8 bg-blue-500 xs:h-auto xs:square'></div>
                <div className='h-8 bg-blue-500 xs:h-auto xs:square'></div>
                <div className='h-8 bg-blue-500 xs:h-auto xs:square'></div>
            </div> */}
      {/*<section class="overflow-hidden text-gray-700 ">
                <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/3 bg-transparent cursor-pointer group prespective rounded-lg">
                            <div class="w-full p-1 md:p-2 relative preserve-3d group-hover:my-rotate-y-180 duration-700 rounded-lg">
                                <div className="absolute backface-hidden text-center">
                                    <Image alt="gallery" class="block object-cover object-center w-auto h-1/2 rounded-lg" src={waterPollution} />
                                    <h1 className='relative text-white m-auto bottom-44'>Reduce Flooding</h1>
                                </div>

                                <div className='w-full p-1 md:p-2 h-full absolute my-rotate-y-180 backface-hidden bg-gray-100  rounded-lg'>
                                    <div className='text-center flex flex-col items-center justify-center  rounded-lg'>
                                        <h2 className='text-black'>Reduce flooding</h2>
                                        <p className='p-2 my-2 text-black'>When heavy rain falls, the runoff that flows into the street can back up and cause street flooding.
                                            When we soak up the rain we help reduce the amount of water that flows from our properties into the street and the stormwater system.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-wrap w-1/3 bg-transparent cursor-pointer group prespective rounded-lg">
                            <div class="w-full p-1 md:p-2 relative preserve-3d group-hover:my-rotate-y-180 duration-700 rounded-lg">
                                <div className="absolute backface-hidden text-center">
                                    <Image alt="gallery" class="block object-cover object-center w-auto h-1/2 rounded-lg" src={waterPollution} />
                                    <h1 className='relative text-white m-auto bottom-44'>Climate resiliency</h1>
                                </div>

                                <div className='w-full p-1 md:p-2 h-full absolute my-rotate-y-180 backface-hidden bg-gray-100  rounded-lg'>
                                    <div className='text-center flex flex-col items-center justify-center  rounded-lg'>
                                        <h2 className='text-black'>Climate resiliency</h2>
                                        <p className='p-2 my-2 text-black'> As different parts of the country become drier, wetter or hotter, green infrastructure practices can help communities improve their resiliency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                            </div>
                        </div>
                    </div>
                </div>
        </section>*/}
    </div>
  );
}
