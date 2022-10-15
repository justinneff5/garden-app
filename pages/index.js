import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/homepage.module.css'
import plantImage from './assets/images/plant.png'
import Link from 'next/link'
import gardenImage from './assets/images/garden.png'
import logo from './assets/images/BB.png'
import Main from './Main'
import Cards from './Cards'
import Navbar from './Navbar'

export default function Home() {

  return (
    <div className={styles.body}>
      <div className={styles.headerBar}>
        <div className={styles.tabContainer}>
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
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image 
            src={logo}
            width="300px"
            height="300px"
          />
        </div>s
        <div className={styles.brandName}>
          BACKYARD BABYLON
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.infoHeader}>
          What is a rain garden?
        </div>
        <div className={`${styles.infoBody} ${styles.aboutBody}`}>
          A rain garden is not your regular garden with pretty looking flowers and other plants. Rain garden is much more than that, it serves as a way for water to be absorbed into the ground. The garden allows for the excess water to seep into the ground and not go to the nearest drain system. Rain gardens have been effective in allowing 30% more water into the ground and decreasing the chance of flooding. 
        </div>
        <div className={styles.rainGardenButton}>
          <p>Plan your rain garden.</p>
        </div>
      </div>
      <div className={styles.gardenImage}>
        <Image 
          src={gardenImage}
          width="400px"
          height="400px"
        />
      </div>
      <div className={styles.moreContainer}>
        <div className={`${styles.infoHeader} ${styles.whyHeader}`}>
          Why a rain garden?
        </div>
        <div className={`${styles.infoBody} ${styles.whyBody}`}>
          Rain gardens are more than a way to make your front yard/backyard look pretty. Other than reducing the amount of rainwater being introduced into the drain system, it also promotes environment sustainability. With the climate crisis our world is facing with wildfire, climate change, flooding and much more, rain gardens aim to promote climate sustainability. The US EPA estimates that pollutants carried by rainwater runoff account for 70% of all water pollution. The garden will improve the biodiversity of the area and help the surrounding nature by introducing bees, butterflies and other native insects. With the recent floods around the country, our aim is to promote rain gardens and be a tool for new gardens to get started. According to Flood Defenders, “Flooding has cost US taxpayers more than $850 billion since 2000 and is responsible for ⅔ of the cost from all natural disasters.”
        </div>
        <div className={styles.tablogin}>
          Already have an account? 
          <button className="pl-1 text-blue-300">Log in</button>
        </div>
      </div>
      <div className={styles.about}></div>
      {/* <Image src={plantImage} alt = "nothing!"></Image> */}
      <div className={styles.more}>
        <Link href="/register" className="text-lg text-black">Register</Link>
      </div>

      {/* <Main/> */}
      <Cards/>
    </div>
  )
}
