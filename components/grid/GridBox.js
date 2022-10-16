import { useState } from 'react'
import Image from 'next/image'

export default function GridBox(props) {

    return (
        <>
            <div className={`w-[${props.size.x}] h-[${props.size.y}]`}>
                <button type="button" className="relative w-full h-full border-2 border-red-50">
                    <Image src='/images/textures/soil.jpg' alt="didn't load" layout="fill" objectFit="cover" className="absolute inset-0" />
                    <div className="absolute inset-0 text-md text-green-800 font-bold text-center">PLANT!</div>
                    <div className="absolute inset-0 opacity-20 bg-orange-300"></div>    
                    <div className="absolute inset-0 invisible opacity-40 bg-black"></div>
                </button>
            </div>
        </>
    )
}

// export function getServerSideProps(context) {
//     return { props: {modalOpen : false}}
// }