import { Link } from 'react-router'
import viteLogo from '/logo-rectangle.jpg'

function Header() {
  return (
    <header className="border-b">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-2 max-w-7xl">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={viteLogo} alt="Pro Solutions Logo" className="w-48 object-contain" />
          </Link>
          <span className="font-bold text-xl tracking-tight">PRO SOLUTIONS</span></div>
          <nav className="flex gap-6 text-sm font-medium">
            <Link to="/services" className="transition" style={{ color: 'var(--color-primary)' }}>Services</Link>
            <Link to="/contact" className="transition" style={{ color: 'var(--color-primary)' }}>Contact</Link>
          </nav>
        </div>
      <div
        className="text-white text-center text-xs py-1 font-semibold"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        Locations in Texas, New York, &amp; Miami
      </div>
    </header>
  )
}

export default Header