import React from "react";
import Image from "next/image";
import waterPollution from "../assets/images/wpollution.jpeg"
import flood from "../assets/images/floodControl.jpeg"
import protectWater from "../assets/images/protectWater.png"
import climate from "../assets/images/climate.jpeg"
import saveMoney from "../assets/images/saveMoney.webp"
import Card from "./Card";
import hood from "../assets/images/hood.jpeg"
import coolAir from "../assets/images/cool-air.jpeg"
import habitat from "../assets/images/habitat.jpeg"

export default function CardsContainer(props) {
    const display = props.display === 1
        ? true
        : false;
    
    return display ? (
            <div className='w-4/5 h-auto p-1 m-auto'>
                <div class="grid grid-col-4 grid-flow-col gap-4 justify-between pb-5">
                    <Card 
                        title='Prevent water pollution'
                        text='Soaking up the rain helps keep rain water on-site and reduce the polluted runoff flowing into our streets and local waterways.'
                        img={waterPollution}
                    />
                    <Card 
                        title='Reduce flooding'
                        text='When heavy rain falls, the runoff that flows into the street can back up and cause street flooding. When we soak up the rain we help reduce the amount of water that flows from our properties into the street and the stormwater system.'
                        img={flood}
                    />
                    <Card 
                        title='Protect our water resources'
                        text='When we soak up the rain we help get water into the ground. This helps to keep our streams and rivers flowing and replenish the groundwater we rely on for drinking water and other uses.'
                        img={protectWater}
                    />
                    <Card 
                        title='Climate resiliency'
                        text='As different parts of the country become drier, wetter or hotter, green infrastructure practices can help communities improve their resiliency.'
                        img={climate}
                    />
                </div>
            </div>
    ) : (
            <div className='w-4/5 h-auto p-1 m-auto'>
                <div class="grid grid-col-4 grid-flow-col gap-4 justify-between pb-5">
                    <Card 
                        title='Beautify neighborhoods'
                        text="When we soak up the rain with trees and rain gardens in our yards and in our cities, we're adding beauty to the landscape."
                        img={hood}
                    />
                    <Card 
                        title='Cool the air'
                        text="When we soak up the rain by planting trees and other plants in our urban neighborhoods we're helping to cool the air and reduce urban heat islands."
                        img={coolAir}
                    />
                    <Card 
                        title='Save money'
                        text='When we soak up the rain and reduce the runoff that flows to the street, we reduce the water to be handled by the town drainage systems. This can help lower community costs for managing this water.'
                        img={saveMoney}
                    />
                    <Card 
                        title='Create habitat'
                        text='When we plant trees, grasses and flowering perennials, especially native plants suitable for the area, we create habitat for birds and insects such as butterflies, bees and other pollinators.'
                        img={habitat}
                    />
                </div>
            </div>
    );
}