import styled from 'styled-components'

export const Overlay = styled.div`
  z-index: 10;
  width: 500px;
  height: 250px;
  margin-left: 50%; 
  text-align: right;
  border-radius: 2rem;
  display: flex;
  background-color: rgba(43, 51, 35, 0.8);

  @media(max-width: 768px){
    display: none;
  }
`

export const OverlayText = styled.p`
  font-family: Righteous;
  font-size: 2.6rem;
  align-self: center;
  color: var(--White);
  margin: 10% 10%;
`