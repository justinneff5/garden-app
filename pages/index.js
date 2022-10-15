import styles from '../styles/homepage.module.css'
import Navbar from './Navbar'
import Main from './Main'
import Figures from './Figures'
import Cards from './Cards'
import { ScrollContainer } from "react-scroll-motion";

export default function Home() {

  return (
      <div className={styles.body}>
        <Navbar />
        <ScrollContainer>
          <Main />
          <Cards />
          <Figures />
        </ScrollContainer>
      </div>
  )
}
