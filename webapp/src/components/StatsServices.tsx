function StatsServices() {
  return (
    <section
      className="py-10 px-4"
      style={{
        background: 'linear-gradient(to right, var(--color-primary-dark), var(--color-primary), var(--color-primary-dark))'
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white text-center">
          <div className="text-3xl font-bold mb-2">
            OVER 2 Million+<br />
            Sq Ft of Warehousing<br />
            Spread Across 3 States!
          </div>
        </div>
        <div className="rounded-lg p-6 text-white text-center" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
          <div className="text-lg font-semibold mb-2">Access to Over 150+ Trucks</div>
          <ul className="text-sm space-y-1">
            <li>Refrigerated Trucks (FTL &amp; LTL)</li>
            <li>Dry Trucks (FTL &amp; LTL)</li>
            <li>Drayage (Including Overweight)</li>
            <li>Heavy Haul (Including Overweight Permits)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default StatsServices