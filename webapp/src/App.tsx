import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App