import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juliana Morais</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="is-size-1 has-text-weight-bold has-text-info has-text-centered">Hello from Vesta!</h1>
      </main>
    </div>
  )
}
