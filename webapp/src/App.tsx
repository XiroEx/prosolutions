import { Outlet } from 'react-router'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App