import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function GridBox(props) {
    const [idx, setIdx] = useState(0);
    const router = useRouter();
    useEffect(() => {
        setIdx(props.i);
    },[])
    //console.log(props.garden_links[props.i]);
    async function plant() {
        if (props.name != '') { await axios.post('api/garden/updategarden', { image_link: props.image_link, i: props.i }).then(() => router.reload(window.location.pathname)) }
    }

    function makeUrl(link) {
        let url = `https://res.cloudinary.com/dkecm382m/image/fetch/${link}`
        if (link.startsWith('https://m.media-amazon')) url = link;
        return url;
    }

    function getSource() {
        return props.garden_links[idx] === '' ? '/images/textures/soil.jpg' : makeUrl(props.garden_links[idx]);
    }

    return (
        <>
            <div className={`w-[${props.size.x}] h-[${props.size.y}]`}>
                <button type="button" onClick={() => plant()} className="relative w-full h-full border border-gray-500">
                    <Image src={getSource()} alt="didn't load" layout="fill" objectFit="cover" className="absolute inset-0" />
                    {/* <div className="absolute h-full w-full bg-transparent bottom-0 object-cover">
                        <Image src='/images/animations/rainloader.gif' alt='' objectFit="contain" layout="fill" className="transform scale-x-200 scale-y-150"/>
                    </div> */} 
                    <div className="absolute inset-0 opacity-20 bg-orange-300"></div>
                </button>
            </div>
        </>
    )
}

// export function getServerSideProps(context) {
//     return { props: {modalOpen : false}}
// }