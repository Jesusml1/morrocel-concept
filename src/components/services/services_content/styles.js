import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--Moon-Mist);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  padding: 2rem 5% 1rem;
  color: var(--Cocoa-Bean);
  font-family: Righteous, Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  @media(max-width: 768px){
    padding: 0 1rem;
  }
`
export const Body = styled.div`
  padding: 1rem 10% 2rem;
  h3{
    color: var(--Cocoa-Bean);
    font-family: Righteous, Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }
  p{
    color: var(--Black);
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
  }
  @media(max-width: 768px){
    padding: 0 1rem;
  }
`