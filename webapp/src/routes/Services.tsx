import { useNavigate } from 'react-router'
import { useEffect, useState, useRef } from 'react'

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
      }, 100) // 100ms debounce
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  return (
    <section className="relative pb-12 ">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-800">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Integrated Solutions</h2>
            <p>
              We offer both warehousing and freight brokerage services under one roof, providing a seamless logistics solution from storage to transportation. This eliminates the need for multiple vendors, reducing costs and streamlining operations.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">2 Million+ Sq. Ft. of Secure Warehouse Space</h2>
            <p>
              With over 2 million square feet of warehouse space, we offer scalable storage solutions for businesses of all sizes. Our facilities are equipped with advanced inventory management systems, climate control options, and top-tier security to safeguard your goods.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Extensive Carrier Network</h2>
            <p>
              As a leading freight broker, we have access to a vast network of pre-qualified carriers. This ensures that we can always find the right capacity at competitive rates, whether you need full truckload (FTL), less-than-truckload (LTL), or specialized transportation.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Real-Time Visibility</h2>
            <p>
              Our state-of-the-art technology provides real-time tracking of both your inventory and shipments. From the moment your products arrive at our warehouse to the moment they reach their final destination, you’ll have full visibility at every step.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Customized Solutions</h2>
            <p>
              We understand that no two businesses are alike, which is why we offer tailored solutions to meet your specific needs. Whether it’s specialized storage, expedited shipping, or a unique pick-and-pack process, we work closely with you to design the perfect logistics strategy.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">Cost-Effective Operations</h2>
            <p>
              By combining warehousing and freight brokerage services, we help you optimize both your storage and shipping costs. Our partnerships with carriers and expertise in efficient warehouse management ensure that you get the best value for your logistics spend.
            </p>
          </div>
        </div>
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
  )
}

export default Services