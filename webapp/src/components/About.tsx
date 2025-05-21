function About() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Welcome to our logistics brokering platform
          </h3>
          <p className="text-gray-700 mb-4">
            We specialize in connecting shippers and carriers to streamline transportation processes. Our innovative approach ensures efficient and cost-effective solutions for all parties involved.
          </p>
          <p className="text-gray-700">
            Whether you are a shipper looking to find reliable carriers or a carrier seeking consistent loads, our platform is designed to meet your needs. Join us in revolutionizing the way you do business in the logistics industry.
          </p>
        </div>
        <video
          src="/trucking.mp4"
          className="rounded-lg shadow-lg w-full h-56 object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  )
}

export default About