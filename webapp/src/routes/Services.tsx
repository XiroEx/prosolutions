import { useNavigate } from 'react-router'
import { useEffect, useState, useRef } from 'react'
import Hero from '../components/Hero'
import ServicesList from '../components/ServicesList'
import WhatWeDo from '../components/WhatWeDo'

function Services() {
  const navigate = useNavigate()
  const [atBottom, setAtBottom] = useState(false)
  const debounceRef = useRef<number | null>(null)

  useEffect(() => {
    function handleScroll() {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
      debounceRef.current = window.setTimeout(() => {
        const scrolledToBottom =
          window.innerHeight + window.scrollY >= document.body.offsetHeight - 120
        setAtBottom(scrolledToBottom)
      }, 100)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  return (
    <>
      <Hero src="/containers.mp4" />
      <section className="relative pb-12 max-w-7xl mx-auto">
        <div className="mx-auto py-12">
          <WhatWeDo />
          <br/>
          <ServicesList />
        </div>
        {/* Floating Contact Us Button */}
        <button
          onClick={() => navigate('/contact')}
          className={
            `md:static md:mx-0 md:mt-8 min-w-[180px] bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-3 rounded-full shadow-lg font-semibold transition z-50
            ${!atBottom ? 'fixed bottom-6 left-1/2 -translate-x-1/2' : 'static mx-auto mt-4'} md:translate-x-0 md:bottom-auto md:left-auto`
          }
        >
          Contact Us
        </button>
      </section>
    </>
  )
}

export default Services