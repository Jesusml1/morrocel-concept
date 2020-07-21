import Header from '../shared/header/'
import Footer from '../shared/footer'
import AboutUs from './about_us'
import Mision from './mision'
import Vision from './vision'
import Certifications from '../home/certifications'

export default function About(){
  return (
    <>
      <Header />
      <AboutUs />
      <Mision />
      <Vision />
      <Certifications />
      <Footer />
    </>
  )
}
