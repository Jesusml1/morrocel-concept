import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--Moon-Mist);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`

export const Title = styled.div`
  padding: 2rem 5%;
  h1{
    color: var(--Cocoa-Bean);
    font-family: Righteous, Arial, Helvetica, sans-serif;
    font-size: 2rem;
  }
`

export const Body = styled.div`
  padding: 1rem 10%;
  h3{
    color: var(--Cocoa-Bean);
    font-family: Righteous, Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
  }
  p{
    color: var(--Black);
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1rem;
  }
`