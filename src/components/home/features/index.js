import { WrapperFeatures,
         TopCover,
         BottomCover,
         ContentWrapper,
         Card, CartTitle, CartBody, Title, MoreButtom } from './features'

import { SocialResponsabilityIcon,
          ProductsIcon,
          TecnologyIcon,
          ServicesIcon, } from './icons'

import Link from 'next/link'

export default function Features(){
  return(
    <WrapperFeatures>
      <TopCover>
        <svg width="1440" height="326" viewBox="0 0 1440 326" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1440L484.256 69.5L197.926 144.5L0 326V0Z" fill="#2B3323"/>
        </svg>
      </TopCover>



      <ContentWrapper> 

        <Card>
          <CartTitle>
            <SocialResponsabilityIcon />
            <Title>Responsabilidad Social</Title>
          </CartTitle>
          <CartBody>
            Contribuimos al desarrollo humano sostenible, a través del compromiso y la confianza de la empresa hacia sus empleados y las familias de estos, hacia la sociedad en general y hacia la comunidad local, en pos de mejorar el capital social y la calidad de vida de toda la comunidad, siempre procurando un impacto positivo que se traduzca en mayor competitividad y sostenibilidad para nuestra empresa.
          </CartBody>
          <Link href="/">
            <MoreButtom>Leer mas</MoreButtom>
          </Link>
        </Card>

        <Card>
          <CartTitle>
            <ProductsIcon />
            <Title>Productos</Title>
          </CartTitle>
          <CartBody>
            Manufacturamos productos laminados bajo diferentes procesos y con variadas aplicaciones, así como también productos recubiertos y siliconados de la más alta calidad, cubriendo las expectativas de nuestros clientes y adaptándonos a las exigencias del mercado nacional e internacional, ofreciendo a su vez estructuras con o sin impresión, mediante el sistema de impresión flexográfica. 
          </CartBody>
          <Link href="/">
            <MoreButtom>Leer mas</MoreButtom>
          </Link>
        </Card>

        <Card>
          <CartTitle>
            <TecnologyIcon />
            <Title>Tecnología</Title>
          </CartTitle>
          <CartBody>
            Contamos con tres líneas dedicadas a la conversión de empaques flexibles mediante procesos de laminación base solvente, laminación solvent less y laminación por extrusión coating, siliconado y recubrimiento antigraso, con procesos auxiliares de impresión flexográfica, corte, resmado, bolseado, parafinado y aplicación de hot melt.
          </CartBody>
          <Link href="/">
            <MoreButtom>Leer mas</MoreButtom>
          </Link>
        </Card>

        <Card>
          <CartTitle>
            <ServicesIcon />
            <Title>Servicios</Title>
          </CartTitle>
          <CartBody>
            Morrocel, C.A. ofrece a sus clientes nuevos y de línea, un servicio integral, que abarca desde la conceptualización y diseño del empaque hasta el servicio post-venta, asegurando atención personalizada mediante asistencia técnica especializada.
          </CartBody>
          <Link href="/">
            <MoreButtom>Leer mas</MoreButtom>
          </Link>
        </Card>
        
        
        
      </ContentWrapper>



      <BottomCover>
        <svg width="1438" height="483" viewBox="0 0 1438 483" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M526.5 427L1163 314L1438 0V482.5H0L526.5 427Z" fill="#2B3323"/>
        </svg>
      </BottomCover>
    </WrapperFeatures>
  )
}