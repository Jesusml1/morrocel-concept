import About from '../components/about/'
import Head from 'next/head'

export default function quienes_somos() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Morrocel | Quienes Somos</title>
      </Head>
      <About />
    </>
  )
}

