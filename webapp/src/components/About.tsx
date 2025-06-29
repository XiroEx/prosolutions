function About() {
  return (
    <section className="py-6 bg-white max-w-7xl mx-auto">
      <div className="mx-auto grid md:grid-cols-2 gap-8 items-center lg:gap-32 md:px-16">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Seamless transportation, warehousing, and freight management.
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