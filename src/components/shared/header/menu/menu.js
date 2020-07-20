import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components'
import Link from 'next/link'

import { ListIcons } from '../list_icons' 
import { ListIcon } from '../list_icon'

const StyledMenu = styled.nav`
  display: none;
  font-family: Roboto;
  flex-direction: column;
  justify-content: center;
  background: #C1C4B6;
  height: 110vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease;
  -webkit-transition: all 0.3s;
  opacity: ${({ open }) => open ? '1' : '0'};
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  @media (max-width: 768px) {
    display: flex;
    min-width: 100%;
  }

  a {
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 1.6rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #481D1F;
    text-decoration: none;
    transition: color 0.3s linear;
    
  }

  ul {
    margin: 0;
    padding: 4rem 0 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    li{
      margin-right: 1rem; 
    }
  }
`;




const Menu = ({ open }) => {
  return (
    <StyledMenu open={ open } >
      <Link href="/quienes_somos">
        <a>
          QUIENES SOMOS
        </a>
      </Link>
      <Link href="/productos">
        <a>
          PRODUCTOS
        </a>
      </Link>
      <Link href="/tecnologia">
        <a>
          TECNOLOGIA
        </a>
      </Link>
      <Link href="/servicios">
        <a>
          SERVICIOS
        </a>
      </Link>
      <Link href="/contacto">
        <a>
          CONTACTO
        </a>
      </Link>

      <ListIcons>
        <ListIcon>
          <a href="/">
            <img src="./social_media_icons/twitter-brands.svg" width="28" height="28" alt="twitter" />
          </a>
        </ListIcon>
        <ListIcon>
          <a href="/">
            <img src="./social_media_icons/facebook-f-brands.svg" width="28" height="28" alt="facebook" />
          </a>
        </ListIcon>
        <ListIcon>
          <a href="/">
            <img src="./social_media_icons/instagram-brands.svg" width="28" height="30" alt="instagram" />
          </a>
        </ListIcon>
        
      </ListIcons>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;