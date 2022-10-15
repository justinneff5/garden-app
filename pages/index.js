import styles from '../styles/homepage.module.css'
import Navbar from './Navbar'
import Main from './Main'
import Figures from './Figures'
import CardsContainer from './CardsContainer'

export default function Home() {

  return (
      <div className={styles.body}>
        <Navbar />
        <Main />
        <div className="shadow-[0_0_100px_rgba(0,0,0,0.3)_inset] text-lg bg-cover bg-[url('https://imgs.search.brave.com/oYrC62mbCxJnchxBNsb8PREVVsItRUccmgbZkH2gMwY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyMDAwLzEq/WHNCMGhZdzIxci1P/VWxwajJqdHRXdy5q/cGVn')] p-12">
          <CardsContainer display={1} />
          <CardsContainer display={2} />
        </div>
        <Figures />
      </div>
  )
}
