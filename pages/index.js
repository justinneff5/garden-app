import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/homepage.module.css'
import plantImage from './assets/images/plant.png'

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
      </div>
      <div className={styles.about}></div>
      <img src={plantImage}></img>
      <div className={styles.more}></div>
    </div>
  )
}
