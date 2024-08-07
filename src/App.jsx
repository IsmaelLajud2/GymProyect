

import '../src/app.css'
import NavbarHero from './Components/Navbar/NavbarHero'
import Hero from './Components/Hero/Hero'
import ServicesHero from './Components/Services/ServicesHero'
import Clases from './Clases/Clases'


import PlanesHero from './Planes/PlanesHero.jsx'
import Footer from './Footer/Footer.jsx'


const App = () => {
  return (
    <> 
    <div className='page-container'> 
    <NavbarHero></NavbarHero>
    <section id="home">
          <Hero />  </section>

    <section id="services">
          <ServicesHero />
        </section>
        <section id="clases">
    <Clases/>
        </section>
<section id='planes'>
  <PlanesHero/>
</section>

 
   <Footer></Footer>
    </div>

</>
  )
}

export default App