import { useState } from 'react'
import Hero from '../components/Hero'
import { submitContactForm } from '../calls/contact'
import { sendmail } from '../calls/sendmail'
import { generateInquiryResponseHTML } from '../templates/emailTemplates'
import LoadingOverlay from '../components/LoadingOverlay'

// Add global declaration for window.gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function Contact() {
  // Detect carrier query param
  const isCarrier = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('carrier') === 'true';

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    service: '', // Added service property
  })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await submitContactForm(form)
      
      // Send general inquiry response email
      await sendmail({
        email: form.email,
        subject: 'Thank you for contacting Pro Solutions Logistics',
        html: generateInquiryResponseHTML({
          name: form.name,
          service: form.service,
          message: form.message
        })
      })
      
      setSubmitted(true)
      // Google Ads conversion event
      if (window?.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17099499200/H3EACPvy2tgaEMDN1tk_'
      });
      }
    } catch {
      setError('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading && <LoadingOverlay />}
      <Hero src="/trucking.mp4" 
        title={<h2 className="text-2xl md:text-4xl font-semibold mb-2 text-[var(--color-primary)] drop-shadow-lg">
          {isCarrier ? 'Join Our Carrier Network' : 'Contact Us'}
        </h2>}
        content={
          isCarrier ? (
            <div className="flex flex-wrap justify-center gap-4 mt-2 text-lg font-medium">
              <span style={{ color: "var(--color-primary)" }} className="drop-shadow-2xl">
                We are actively seeking <span className="text-[var(--color-secondary)] font-bold">OWNER OPERATORS</span> to join our nationwide carrier network.
                Partner with us for consistent loads, fast payment, and dedicated support.
              </span>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 mt-2 text-lg font-medium">
              <span style={{ color: "var(--color-primary)" }} className="drop-shadow-2xl">
                Call, email, or use the form below to connect with our{' '}
                <span className="text-[var(--color-secondary)]">logistics experts</span>.
              </span>
            </div>
          )
        }
      />
      <section className="md:mt-2 bg-white rounded-lg shadow p-8 mx-auto max-w-7xl">
        <div className='w-full'>
          <p className="text-gray-700 text-center mb-10 ">
            {isCarrier
              ? 'Fill out the form below to apply as an OWNER OPERATOR. Our team will contact you with next steps to join our carrier network.'
              : 'Have a question about our logistics solutions, need a quote, or want to discuss a custom project? Fill out the form below and our team will respond promptly. We specialize in reliable, on-time delivery and tailored logistics services for businesses of all sizes.'
            }
          </p>
        </div>
        {submitted ? (
          <div className="text-[var(--color-primary)] text-center font-semibold">
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
              {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-center">
                  {error}
                </div>
              )}
              {/* Radio buttons */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">
                  I&apos;m looking for
                </label>
                <div className="flex gap-4 mb-2 justify-center">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="service"
                      value="Warehousing"
                      checked={form.service === 'Warehousing'}
                      onChange={handleChange}
                      className="form-radio text-[var(--color-primary)]"
                    />
                    <span className="ml-2">Warehousing</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="service"
                      value="Transport"
                      checked={form.service === 'Transport'}
                      onChange={handleChange}
                      className="form-radio text-[var(--color-primary)]"
                    />
                    <span className="ml-2">Transportation</span>
                  </label>
                </div>
              </div>
              {/* End radio buttons */}
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
      
    </>
  )
}

export default Contact