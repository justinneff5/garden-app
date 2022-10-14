import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="w-screen h-screen absolute bg-green-300">
      <div className="mt-20 left-1/2 relative h-auto w-auto text-md text-black">GARDEN APP</div>
    </div>
  )
}
