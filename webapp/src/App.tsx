import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsServices from './components/StatsServices'
import About from './components/About'
import RequestQuote from './components/RequestQuote'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <Hero />
      <StatsServices />
      <About />
      <RequestQuote />
      <Footer />
    </div>
  )
}

export default App
