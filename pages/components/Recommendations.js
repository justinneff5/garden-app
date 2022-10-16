import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import RecommendedPlantCard from './RecommendedPlantCard';
import plantImage from '../assets/images/BB.png'

let deep_copy = [];
export default function Recommendations() {
    const [exposure, setExposure] = useState(0);
    const [moisture, setMoisture] = useState(0);
    const [ran, setRan] = useState(false);
    const [activePlantIndex, setActivePlantIndex] = useState(0);

    async function handleSubmit(e) {
        e.preventDefault();
        setRan(false)
        let res = await axios.post('/api/plants/getrecommended_plants', { moisture: moisture, exposure: exposure });
        setDeepCopy(res.data.body);
    }
    function setDeepCopy(recs) {
        deep_copy = [...recs];
        setRan(true);
        console.log("copying");
        console.log(deep_copy);
        if (deep_copy.length > 0) setActivePlantIndex(0);
    }

    function nextPlant() {
        setActivePlantIndex(activePlantIndex + 1);
    }
    function prevPlant() {
        setActivePlantIndex(activePlantIndex - 1);
    }


    return (
        <div className='w-3/4 mt-10 m-auto justify-center items-center bg-white rounded-3xl p-5 shadow-2xl'>
            <form>
                <div className='text-textDark w-auto'>
                    <div className='text-center py-5 first-letter:relative text-textDark font-semibold text-xl'>
                        Get Plant Recommendations
                    </div>
                    <h2 className='pb-5 w-4/5 m-auto'>Sun Exposure</h2>
                    <ul class="items-center w-4/5 m-auto text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input onClick={(e) => setExposure(e.target.value)} id="horizontal-list-radio-exp-low" type="radio" value={0} name="list-radio-e" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-700  dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Low </label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input onClick={(e) => setExposure(e.target.value)} id="horizontal-list-radio-exp-med" type="radio" value={1} name="list-radio-e" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input onClick={(e) => setExposure(e.target.value)} id="horizontal-list-radio-exp-high" type="radio" value={2} name="list-radio-e" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-700  dark:bg-gray-600 dark:border-gray-500" />
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
                                <input onClick={(e) => setMoisture(e.target.value)} id="horizontal-list-radio-moist-low" type="radio" value={0} name="list-radio-m" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Low </label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input onClick={(e) => setMoisture(e.target.value)} id="horizontal-list-radio-moist-medium" type="radio" value={1} name="list-radio-m" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
                            </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div class="flex items-center pl-3">
                                <input onClick={(e) => setMoisture(e.target.value)} id="horizontal-list-radio-moist-high" type="radio" value={2} name="list-radio-m" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500" />
                                <label for="horizontal-list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">High</label>
                            </div>
                        </li>

                    </ul>
                    <div className="flex justify-center items-center p-10">
                        <button
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            className=" text-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-400 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
                            Get Recommendations
                        </button>
                    </div>

                </div>
            </form>


            {ran && deep_copy.length != 0 ? (
                <div className="w-3/4 m-auto flex flex-col justify-center items-center">
                        {deep_copy.map((plant, i) => {return (
                        
                        <RecommendedPlantCard
                            name={plant.name}
                            comments={plant.comments}
                            exposure={plant.exposure}
                            bloom={plant.bloom}
                            moisture={plant.moisture}
                            maturity={plant.mature_size}
                            img={plant.image_link}
                            localPlant={deep_copy[i]} 
                        />)})}
                    

                </div>
            ) : (<div></div>)}

        </div>
    );
}