import styles from '../styles/homepage.module.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Figures from './components/Figures'
import CardsContainer from './components/CardsContainer' 
import Footer from './components/Footer'

export default function Home() {

  return (
      <div> 
        <Navbar currentTab='home' />
        <Main />
        <div className="shadow-[0_0_100px_rgba(0,0,0,0.3)_inset] text-lg bg-cover bg-[url('https://imgs.search.brave.com/oYrC62mbCxJnchxBNsb8PREVVsItRUccmgbZkH2gMwY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzEyMDAwLzEq/WHNCMGhZdzIxci1P/VWxwajJqdHRXdy5q/cGVn')] p-12">
          <CardsContainer display={1} />
          <CardsContainer display={2} />
        </div>
        <Figures />
        <Footer />
      </div>
  )
}
