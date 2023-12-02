import Benefits from "./Components/Benefits"
import Elipse from "./Components/Elipse"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Transform from "./Components/Transform"
import World from "./Components/World"


function App() {

  return (
    <div>
    <Navbar />
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <Transform />
      </div>
      <div>
        <Benefits />
      </div>
      <div>
        <World />
      </div>
      <div>
        <Elipse />
      </div>
      <div>
        <Footer />
      </div>
    </main>
    </div>
  )
}

export default App
