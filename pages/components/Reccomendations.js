import Image from "next/image";
import React from "react";

import plantImage from '../assets/images/BB.png'
export default function Reccomendations() {

    return (
        <div className='w-2/3 mt-10 mb-10 h-auto m-auto justify-center items-center bg-white rounded-3xl p-16 shadow-2xl'>
            <div className='text-black w-auto'>
                <h2 className='pb-5 w-4/5 m-auto'>Sun Exposure</h2>
                <ul class="items-center w-4/5 m-auto text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Low </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="horizontal-list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">High</label>
                        </div>
                    </li>

                </ul>
            </div>

            <div className='text-black bg-white'>
                <h2 className='pt-10 pb-5 m-auto w-4/5'>Moisture Level</h2>
                <ul class="items-center m-auto w-4/5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Low </label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="horizontal-list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">High</label>
                        </div>
                    </li>

                </ul>
                <div className="flex justify-center items-center p-10">
                    <button
                        className=" text-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-400 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
                        Get Reccomendations
                    </button>
                </div>
            </div>


            <div className="bg-green-300 h-auto m-auto border-2 flex flex-row rounded-xl shadow-2xl">
                <div className="p-5 flex w-1/4 h-auto">
                    <Image src={plantImage} />
                </div>

                <div className="text-left w-3/4 m-5">
                    

                    <div className="w-full float-left">
                        <h2 className=" border-b-2 pb-3 mb-5 text-black">Name of Plant</h2>
                        <div className="flex float-right w-1/2 pl-3 text-black">
                    
                            <div className=" w-full h-auto break-words">
                            <h4 className="font-semibold">Comments: </h4>
                               fbkdjsbfkjdsbfesjfbkshbgkjsbkjgbsfkgjbsrljgbsflgbslfkkjbdskf
                            </div>
                        </div>
                        <p className="font-semibold text-black">
                            Ideal Exposure:{" "}
                            <span className=" text-black font-light">
                                This is very popular
                            </span>
                        </p>
                        <p className="font-semibold text-black">
                            Ideal Moisture: <span className="font-light text-black">Seeds</span>
                        </p>
                        <p className="font-semibold text-black">
                            Maturity:{" "}
                            <span className=" text-black font-light">24</span>
                        </p>

                        <p className="font-semibold text-black">
                            Bloom:{" "}
                            <span className=" text-black font-light">April</span>
                        </p>
                    </div>
                    
                    
                </div>
            </div>

        </div>
    );
}