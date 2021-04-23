import Head from 'next/head'

import { Hero, Level, Tiles, Engage, Quote, Mission, Pricing } from '../layouts'
import { Footer } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juliana Morais</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Level />
        <Tiles />
        <Engage />
        <Quote />
        <Mission />
        <Pricing />
        <Footer />
      </main>
    </div>
  )
}
