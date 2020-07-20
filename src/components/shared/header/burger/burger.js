import React from 'react';
import styled from 'styled-components'
import { bool, func } from 'prop-types'


const StyledBurger = styled.button`
  /* position: absolute;
  top: 5%; */
  /* right: 2rem; */
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: #481D1F;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }

  @media(max-width: 768px){
      display: flex;
    }
`;





const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={ open } onClick={ () => setOpen(!open) } >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger;