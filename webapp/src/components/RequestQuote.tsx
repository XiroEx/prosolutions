import { Link } from "react-router"

function RequestQuote() {
  return (
    <section
      className="py-12 px-4"
      style={{
        background: 'linear-gradient(to right, var(--color-primary-dark), var(--color-primary))'
      }}
    >
      <div className="max-w-xl mx-auto text-center text-white">
        <h3 className="text-2xl font-bold mb-2">Request a Quote!</h3>
        <p className="mb-4">
          Submit your details now to get a custom quote from our top-tier logistics and warehouse team! Streamline your operations efficiently today!
        </p>
        <Link to="/contact">
          <button
            className="font-semibold px-6 py-2 rounded shadow transition"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-primary)'
            }}
          >
            Request a Quote
          </button>
        </Link>
      </div>
    </section>
  )
}

export default RequestQuote