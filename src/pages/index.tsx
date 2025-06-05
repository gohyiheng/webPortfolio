import About from './components/about'
import Contact from './components/contact'
import Navbar from './components/navbar'
import Projects from './components/projects'
import CSVRecommendationsApp from './recommender'

function App() {
  return (
    <div>
      {/* Background image layer */}
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/img/bg.JPG')" }}
      >
      </div> */}

      {/* Content above background */}
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <CSVRecommendationsApp />
    </div>
  )
}

export default App