

import '../src/app.css'
import NavbarHero from './Components/Navbar/NavbarHero'
import Hero from './Components/Hero/Hero'
import ServicesHero from './Components/Services/ServicesHero'

const App = () => {
  return (
    <> 
    <div className='page-container'> 
    <NavbarHero></NavbarHero>
    <Hero></Hero>
    <ServicesHero></ServicesHero>
    </div>

</>
  )
}

export default App