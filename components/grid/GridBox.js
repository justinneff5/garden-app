import { useState } from 'react'
import Image from 'next/image'

export default function GridBox(props) {
    return (
        <>
            <div className={`w-[${props.size.x}] h-[${props.size.y}]`}>
                <button type="button" className="relative w-full h-full border-2 border-red-50">
                    <Image src='/images/textures/soil.jpg' alt="didn't load" layout="fill" objectFit="cover" className="absolute inset-0" />
                    <div className="absolute h-full w-full inset-0 text-2xl text-green-800 font-bold text-center pt-4">PLANT!</div>
                    {/* <div className="absolute h-full w-full bg-transparent bottom-0 object-cover">
                        <Image src='/images/animations/rainloader.gif' alt='' objectFit="contain" layout="fill" className="transform scale-x-200 scale-y-150"/>
                    </div> */}
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