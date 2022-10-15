import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/homepage.module.css'
import plantImage from './assets/images/plant.png'
import Link from 'next/link'

export default function Home() {

  return (
    <div className={styles.body}>
      <div className={styles.headerBar}>
        <div className={styles.title}>
          BACKYARD BABYLON
        </div>
        <div className={styles.tab}>
          <a>Home</a>
        </div>
        <div className={styles.tab}>
          <a>Rain Garden</a>
        </div>
        <div className={styles.tab}>
          <a>Plants</a>
        </div>
        <div className={styles.tab}>
          <a>Donate</a>
        </div>
        <div className={styles.tablogin}>
          Already have an account? 
          <button className="pl-1 text-blue-300">Log in</button>
        </div>
      </div>
      <div className={styles.about}></div>
      <Image src={plantImage} alt = "nothing!"></Image>
      <div className={styles.more}>
        <Link href="/register" className="text-lg text-black">Register</Link>
      </div>
    </div>
  )
}
