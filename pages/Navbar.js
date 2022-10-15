import Head from 'next/head'
import Image from 'next/image'
import plantImage from './assets/images/plant.png'
import Link from 'next/link'
import gardenImage from './assets/images/garden.png'
import logo from './assets/images/BB.png'


export default function Navbar() {

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src={logo}
                alt="logo"
                width="50px"
                height="50px"/>
                <h2>Backyard Babylon</h2>
                <ul className='md:flex'>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>

                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Rain Garden</li>
                    </Link>

                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Plants</li>
                    </Link>

                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Donate</li>
                    </Link>
                </ul>
            </div>
            
        </div>

        

    )
}
    