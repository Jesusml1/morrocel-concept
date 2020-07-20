import styled from 'styled-components'

export const WrapperFeatures = styled.div`
  background-color: var(--Kangaroo); 
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media(max-width: 768px){
    padding: 2rem 0;
  }
`

export const TopCover = styled.div`
  
  position: absolute;
  top: 0;
  width: 100%;

  @media(max-width: 768px){
    display: none;
  }
  svg {
    z-index: 2;
    width: 100%;
    height: auto;
  }
`

export const BottomCover = styled.div`
  
  position: absolute;
  bottom: 0;
  width: 100%;

  @media(max-width: 768px){
    display: none;
  }
  
  svg {
    z-index: 2;
    width: 100%;
    height: auto;
  }
`

// CARDS


export const ContentWrapper = styled.div`
  height: auto;
  width: 60vw; 
  /* border: 2px solid black; */
  padding: 4rem 0; 
  
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  z-index: 10;
  @media(max-width: 768px){
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    width: auto;
    padding: 2rem 0;
  }
`

export const Card = styled.div`
  background-color: var(--Moon-Mist);
  height: 325px;
  width: 325px;
  /* padding: 1rem; */
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow:
    0 6.7px 5.3px rgba(0, 0, 0, 0.061),
    0 22.3px 17.9px rgba(0, 0, 0, 0.081),
    0 100px 80px rgba(0, 0, 0, 0.1);
  
`

export const CartTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  margin: 1rem 2rem 0;
  svg {
    transform: scale(0.75);
  }
`
export const CartBody = styled.p`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  color: var(--Black);
  margin: 0.5rem 2rem;
  text-align: justify;
`
export const Title = styled.h2`
  font-family: Righteous, Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  color: var(--Rangitoto);
  margin-left: 1rem; 
`
export const MoreButtom = styled.a`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  color: var(--Black);
  align-self: flex-end;
  margin: 1rem 2rem;
  :hover{
    font-weight: bold;
    cursor: pointer;
  }
`