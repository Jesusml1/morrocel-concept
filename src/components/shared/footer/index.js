import Link from 'next/link'
import styled from 'styled-components'
import { SubFooter,
         NavLinks,
         NavLink,
         Direction,
         MainFooter,
         BrandLogo,
         SocialMedia,
         IconList,
         Icon,
         Email,
         Disaclimer, } from './footer'



const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`

export default function Footer(){
  return (
    <FooterWrapper>
      <SubFooter>
        <NavLinks>
          <NavLink>
            <Link href='/quienes_somos'>
              <a>QUINES SOMOS</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link href='/productos'>
              <a>PRODUCTOS</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link href='/tecnologia'>
              <a>TECNOLOGIA</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link href='/servicios'>
              <a>SERVICIOS</a>
            </Link>
          </NavLink>
          <NavLink>
            <Link href='/contacto'>
              <a>CONTACTO</a>
            </Link>
          </NavLink>
        </NavLinks>
        <Direction>
          <strong>Dirección Fiscal:</strong><br/>
          Calle 8 Edificio el Morro, piso 3, La Urbina. Caracas 1070.<br/>
          Distrito Capital - Venezuela.<br/>
          Teléfonos: +58 212-2412229 Fax +58 212-2427136<br/><br/>
          <strong>Dirección Planta:</strong><br/>
          Carretera Nacional, Zona industrial II, frente al Fuerte Conopoima<br/>
          San Juan de los Morros. 2301<br/>
          Guárico - Venezuela.<br/>
          Teléfonos: +58 246-4312011 - Fax: +58 246-4310607
        </Direction>
      </SubFooter>

      <MainFooter>
        <BrandLogo>
          <h2><strong>Morrocel</strong> c.a.</h2><br/>
          <h4>2020 Todos los derechos reservados</h4>
        </BrandLogo>

        <SocialMedia>
          <IconList>
            <Icon>
              <a href="/">
                <img src="./social_media_icons/twitter-brands.svg" width="26" height="26" alt="twitter" />
              </a>
            </Icon>
            <Icon>
              <a href="/">
                <img src="./social_media_icons/facebook-f-brands.svg" width="26" height="26" alt="facebook" />
              </a>
            </Icon>
            <Icon>
              <a href="/">
                <img src="./social_media_icons/instagram-brands.svg" width="26" height="28" alt="instagram" />
              </a>
            </Icon>
          </IconList>
          <Email>ventas@morrocel.com</Email>
        </SocialMedia>
      </MainFooter>
      <Disaclimer>
        <p>Este sitio web es un ejemplo y esta basado totalmente en  <a href="http://www.morrocel.com/">este sitio.</a></p>
      </Disaclimer>
    </FooterWrapper>
  )
}