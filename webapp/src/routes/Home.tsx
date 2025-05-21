import About from '../components/About'
import Hero from '../components/Hero'
import RequestQuote from '../components/RequestQuote'
import StatsServices from '../components/StatsServices'

function Home() {
  return (
    <>
      <Hero src="/overtop.mp4" />
      <StatsServices />
      <About />
      <RequestQuote />
    </>
  )
}

export default Home