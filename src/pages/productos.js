import Products from '../components/products'
import Head from 'next/head'


export default function productos() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Morrocel | Productos</title>
      </Head>
      <Products />
    </>
  )
}

