import Home from '../components/home/'
import Head from 'next/head'


export default function Index() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Morrocel | Inicio</title>
      </Head>
      <Home />
    </>
  )
}

