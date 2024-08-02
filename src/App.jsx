

import '../src/app.css'
import NavbarHero from './Components/Navbar/NavbarHero'
import Hero from './Components/Hero/Hero'
import ServicesHero from './Components/Services/ServicesHero'
import Clases from './Clases/Clases'


import PlanesHero from './Planes/PlanesHero.jsx'
import Footer from './Footer/Footer.jsx'
// import ReseñasHero from './Reseñas/ReseñasHero.jsx'

const App = () => {
  return (
    <> 
    <div className='page-container'> 
    <NavbarHero></NavbarHero>
    <Hero></Hero>
    <ServicesHero></ServicesHero>
    <Clases></Clases>
   <PlanesHero></PlanesHero>
   {/* <ReseñasHero></ReseñasHero> */}
   <Footer></Footer>
    </div>

</>
  )
}

export default App