import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios';

export default function GridBox(props) {

    async function plant() {
        console.log('props');
        console.log(props);
        if (props.name != '') { await axios.post('api/garden/updategarden', { idx: props.i, name: props.name, image_link: props.link, moisture: props.moisture, exposure: props.exposure, prevPlants: props.garden_plants }).then(res => window.reload()) }
    }

    function makeUrl(link) {
        let url = `https://res.cloudinary.com/dkecm382m/image/fetch/${link}`
        if (props.localPlant.image_link.startsWith('https://m.media-amazon')) url = link;
        return url;
    }

    return (
        <>
            <div className={`w-[${props.size.x}] h-[${props.size.y}]`}>
                <button type="button" onClick={() => plant()} disabled={!props.valid} className="relative w-full h-full border border-gray-500">
                    {props.valid ? (<Image src='/images/textures/soil.jpg' alt="didn't load" layout="fill" objectFit="cover" className="absolute inset-0" />) : <Image src={makeUrl(props.garden_plants[props.i].image_link)} alt ='' layout="fill" objectFit="cover" className="absolute inset-0" />}
                    {/* <div className="absolute h-full w-full bg-transparent bottom-0 object-cover">
                        <Image src='/images/animations/rainloader.gif' alt='' objectFit="contain" layout="fill" className="transform scale-x-200 scale-y-150"/>
                    </div> */} 
                    {!props.valid ? (<div className="absolute inset-0 opacity-80 bg-black"></div>) : (<div className="absolute inset-0 opacity-20 bg-orange-300"></div>)}
                </button>
            </div>
        </>
    )
}

// export function getServerSideProps(context) {
//     return { props: {modalOpen : false}}
// }