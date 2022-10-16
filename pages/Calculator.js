import React from "react";
import Image from "next/image";
import gardenImage from "./assets/images/garden.png";
import plantImage from "./assets/images/plant.png";
import waterPollution from "./assets/images/wpollution.jpg";


export default function Cards() {
    return (

        <div className='w-full h-auto '>
            <div class="grid grid-col-4 m-auto grid-flow-col gap-4 pb-10 justify-center ml-20 mr-20">
                <div class="col-span-2 m-auto h-auto text-black bg-green-400 mr-10 rounded-xl drop-shadow-lg">
                    <div className=' bg-green-700 rounded-xl border-b-2'>
                        <h3 className='text-center p-5 text-white text-xl'><span className='underline text-black font-bold'>Step 1</span>: Measure the available surface area</h3>

                    </div>
                    <div className='p-5'>
                        <p >Constraints:</p>
                        <ul className='text-sm list-disc list-inside'>
                            <li className='list-item'>At least 10 feet away from buildings with basements</li>
                            <li>At least 15 feet away from septic tank or leach field</li>
                            <li>Away from tree roots and drinking water wells</li>
                            <li>No underground obstructions such as gas or electrical lines (contact DigSafe here)</li>
                        </ul>

                        <div class="input-group input-group-outline pt-5 flex float-left items-center">
                            <label class="form-label text-sm font-semibold pr-4">Enter the measured length (feet): </label>
                            <input type="text" class="form-control" className='w-14 float-right rounded-lg p-2' />
                        </div>
                        <div class="input-group input-group-outline pt-5 flex float-left items-center pb-5">
                            <label class="form-label text-sm font-semibold pr-4">Enter the measured width (feet): </label>
                            <input type="text" class="form-control" className='w-14 float-right rounded-lg p-2' />
                        </div>
                    </div>

                </div>

                <div class="col-span-2 h-auto text-black  bg-green-400 ml-10 rounded-xl drop-shadow-lg">
                    <div className=' bg-green-700 rounded-xl border-b-2'>
                        <h3 className='text-center p-5 text-white '><span className='underline text-black font-bold'>Step 2</span>:  Identify the intensity of rainfall</h3>

                    </div>
                    <div className='p-5'>
                        <p >Note that:</p>
                        <ul className='text-sm list-disc list-inside'>
                            <li className='list-item'>The usual rainfall depth of per event is around 1-4 inches</li>
                            <li>Most roofs are symmetrical so you can enter the number of downspouts attached to the surface area that you just measured.</li>
                        </ul>

                        <div class="input-group input-group-outline pt-5 flex float-left items-center">
                            <label class="form-label text-sm font-semibold pr-4">Enter the depth of rainfall per event (inches): </label>
                            <input type="text" class="form-control" className='w-14 float-right rounded-lg p-2' />
                        </div>
                        <div class="input-group input-group-outline pt-5 flex float-left items-center">
                            <label class="form-label text-sm font-semibold pr-4">Enter the number of downspouts: </label>
                            <input type="text" class="form-control" className='w-14 float-right rounded-lg p-2' />
                        </div>
                    </div>

                </div>
            </div>

            <div class="grid grid-col-4 m-auto grid-flow-col gap-4 pb-10 justify-center ml-20 mr-20">
                <div class="col-span-2 m-auto h-auto text-black bg-green-400 mr-10 rounded-xl drop-shadow-lg">
                    <div className=' bg-green-700 rounded-xl border-b-2'>
                        <h3 className='text-center p-5 text-white '><span className='underline text-black font-bold'>Step 3</span>:  Identify soil type (Sandy, Slity, Clayey)</h3>

                    </div>
                    <div className='p-5'>
                        <p >Steps:</p>
                        <ul className='text-sm list-disc list-inside'>
                            <li className='list-item'>Grab a handful of moist soil and roll it into a ball in your hand</li>
                            <li>Place the ball of soil between your thumb and the side of your forefinger and gently push the soil forward with your thumb, squeezing it upwards to form a ribbon about 1/4 inch thick</li>
                            <li>Try to keep the ribbon uniform in thickness and width. Repeat the motion to lengthen the ribbon until it breaks under its own weight. Measure the ribbon length and input it below</li>
                            <li>No underground obstructions such as gas or electrical lines (contact DigSafe here)</li>
                        </ul>

                        <div class="input-group input-group-outline pt-5 pb-5 flex float-left items-center">
                            <label class="form-label text-sm font-semibold pr-4">Enter ribbon length (inches): </label>
                            <input type="text" class="form-control" className='w-14 float-right rounded-lg p-2' />
                        </div>
                    </div>

                </div>

                <div class="col-span-2 h-auto text-black  bg-green-400 ml-10 rounded-xl drop-shadow-lg">
                    <div className=' bg-green-700 rounded-xl border-b-2'>
                        <h3 className='text-center p-5 text-white '><span className='underline text-black font-bold'>Step 4</span>: Measure the slope of your garden</h3>

                    </div>
                    <div className='p-5'>
                        <p >Note that:</p>
                        <ul className='text-sm list-disc list-inside'>
                            <li className='list-item'>If you have an Android phone, download any Clinometer app from the Playstore. If you have an Iphone, use the default app</li>
                            <li>Place your phone onto the surface of your garden, on top of something flat such as a book or a wooden plank.</li>
                            <li>Read the measured slope from your clinometer app.</li>
                            <li>Note that iff your garden has a slope that is greater than <em className='text-red-600'>7 degree</em>, having a raingarden is not recommended and you should find a different location</li>
                        </ul>

                        <div class="input-group input-group-outline pt-5 flex float-left items-center">
                            <label class="form-label text-sm font-semibold pr-4">Enter the measure slope (degree):: </label>
                            <input type="text" class="form-control" className='w-14 float-right rounded-lg p-2' />
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex justify-center items-center p-10'>
                <button className='text-white text-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-400 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2'>Calculate</button>
            </div>


            <div className='w-4/5 h-auto m-auto justify-center items-center'>
                <div className='text-black'>
                    <h2 className='pb-5'>Sun Exposure</h2>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Low </label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="horizontal-list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">High</label>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className='text-black'>
                    <h2 className='pt-10 pb-5'>Moisture Level</h2>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Low </label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label for="horizontal-list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">High</label>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}