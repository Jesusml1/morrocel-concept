import Link from 'next/link'
import { useState } from 'react'

import { SubWrapper } from './sub_wrapper'
import { ListIcons } from './list_icons'
import { ListIcon } from './list_icon'
//import { EnButton } from './en_button'
import { NavWrapper } from './nav_wrapper'
import { Nav } from './nav'
import { Title } from './title'
import { NavLinks } from './nav_links'
import { NavLink } from './nav_link'
import { Cover } from './cover'

import Burger from './burger/burger'
import Menu from './menu/menu'

export default function Header(){
  const [open, setOpen] = useState(false);
  return(<>
    <SubWrapper>
      <Cover>
        <svg width="1023" height="91" viewBox="0 0 1023 91" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1023L281.646 51.7158L0 91V0Z" fill="#2B3323"/>
        </svg>
      </Cover>
      <ListIcons>
        <ListIcon>
          <a href="https://www.instagram.com/morrocel.ca/">
            <img src="./social_media_icons/twitter-brands.svg" width="26" height="26" alt="twitter" />
          </a>
        </ListIcon>
        <ListIcon>
          <a href="https://www.facebook.com/morrocel.ca.1">
            <img src="./social_media_icons/facebook-f-brands.svg" width="26" height="26" alt="facebook" />
          </a>
        </ListIcon>
        <ListIcon>
          <a href="https://www.instagram.com/morrocel.ca/">
            <img src="./social_media_icons/instagram-brands.svg" width="26" height="28" alt="instagram" />
          </a>
        </ListIcon>
      </ListIcons>
    </SubWrapper>

    <NavWrapper>

      <Nav>
        <Title>
          <Link href="/">
            <a>
              <strong>Morrocel</strong><small> C.A.</small>
            </a>
          </Link>
        </Title>

        <NavLinks>
          <NavLink>
            <Link href="/quienes_somos"><a>QUIENES SOMOS</a></Link>
          </NavLink>
          <NavLink>
            <Link href="/productos"><a>PRODUCTOS</a></Link>
          </NavLink>
          <NavLink>
            <Link href="/tecnologia"><a>TECNOLOGIA</a></Link>
          </NavLink>
          <NavLink>
            <Link href="/servicios"><a>SERVICIOS</a></Link>
          </NavLink>
          <NavLink>
            <Link href="/contacto"><a>CONTACTO</a></Link>
          </NavLink>
        </NavLinks>

        <Burger open={ open } setOpen={ setOpen } />
        <Menu open={ open } setOpen={ setOpen } />
      </Nav>
      
    </NavWrapper>
  </>)
}




