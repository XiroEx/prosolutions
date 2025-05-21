import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    // Here you would normally send the form data to your backend
  }

  return (
    <section className="max-w-5xl mx-auto md:mt-12 bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Contact Us</h2>
      <p className="text-gray-700 text-center mb-10">
        Have a question about our logistics solutions, need a quote, or want to discuss a custom project? 
        Fill out the form below and our team will respond promptly. We specialize in reliable, on-time delivery and tailored logistics services for businesses of all sizes.
      </p>
      {submitted ? (
        <div className="text-green-700 text-center font-semibold">
          Thank you for reaching out!<br />We’ll get back to you soon.
        </div>
      ) : (
        <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center mb-8 lg:mb-0">
            <div className="bg-gray-50 rounded-lg p-6 w-full text-center shadow-sm">
              <div className="mb-4">
                <span className="font-semibold text-gray-800">Phone:</span>
                <br />
                <a href="tel:5166702019" className="text-[var(--color-primary)] font-medium hover:underline">(516) 670-2019</a>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Email:</span>
                <br />
                <a href="mailto:info@prosolutionlogistics.com" className="text-[var(--color-primary)] font-medium hover:underline">info@prosolutionlogistics.com</a>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                Pro Solutions Logistics<br />
                2M+ sq. ft. secure warehouse space<br />
                Nationwide carrier network<br />
                Real-time tracking &amp; tailored solutions
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-2 w-full">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-primary)] text-white font-semibold py-2 rounded hover:bg-[var(--color-primary-dark)] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </section>
  )
}

export default Contact