import Header from '../shared/header/'
import Banner from './banner'
import Description from './description'
import Showcase from './showcase'
import Features from './features'
import Certiications from './certifications'
import Footer from '../shared/footer'


export default function Home(){
  return (
    <div>
      <Header />
      <Banner />
      <Description />
      <Showcase />
      <Features />
      <Certiications />
      <Footer />
    </div>
  )
}
