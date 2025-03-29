
import styles from './App.module.css'
import { Hero } from './Components/Hero/Hero'
import { Navbar } from './Components/Navbar/Navbar'
import { About } from './Components/About/About'
import { Expierence } from './Components/Expierence/Expierence'
import {Project} from './Components/Projects/Project'
import { Contact } from './Components/Contact/Contact'

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About />
      <Expierence/>
      <Project/>
      <Contact/>
      </div>
  )
}

export default App
