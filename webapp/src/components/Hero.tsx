function Hero() {
  return (
    <section
      className="relative"
      style={{
      background: 'linear-gradient(to bottom, var(--color-secondary-light), var(--color-accent))'
      }}
    >
      <video
      autoPlay
      src="/overtop.mp4"
      loop
      muted
      playsInline
      className="w-full h-48 md:h-64 object-cover opacity-50"
      style={{ objectPosition: 'center 75%' }} // Offset the cover vertically
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-gray-900 drop-shadow-lg">
          We Satisfy Your{' '}
            <span style={{ color: 'var(--color-primary)' }} className="drop-shadow-lg">Warehouse</span> and{' '}
            <span style={{ color: 'var(--color-secondary)' }} className="drop-shadow-lg">Logistic</span> Needs!
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-lg font-medium">
            <span style={{ color: 'var(--color-primary)' }} className="drop-shadow-lg">Drayage</span>
            <span style={{ color: 'var(--color-primary)' }} className="drop-shadow-lg">Warehousing</span>
            <span style={{ color: 'var(--color-primary)' }} className="drop-shadow-lg">Transportation</span>
            <span style={{ color: 'var(--color-secondary)' }} className="drop-shadow-lg">Transloading</span>
            <span style={{ color: 'var(--color-secondary)' }} className="drop-shadow-lg">E-Commerce</span>
            <span style={{ color: 'var(--color-secondary)' }} className="drop-shadow-lg">Heavy Haul</span>
          </div>
      </div>
    </section>
  )
}

export default Hero