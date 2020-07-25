import Contact from '../components/contact/index'
import Head from 'next/head'

export default function contacto() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Morrocel | Contacto</title>
      </Head>
      <Contact />
    </>
  )
}

