import styled from 'styled-components'

export const DescriptionWrapper = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 0;
  height: auto;
  display: flex;
  width: 100%;
  background-color: var(--Kangaroo);
  position: relative;

`

export const DescriptionText = styled.p`
  margin: 5rem 15rem 5rem 5rem;
  color: var(--Cocoa-Bean);
  font-size: 2.4rem;
  font-family: Righteous;
  z-index: 3;
  @media(max-width: 768px){
    margin: 2rem;
    font-size: 1.4rem;
    text-align: center;
  }
`

export const Cover = styled.div`
  position: absolute;
  display: block;
  bottom: -5px;
  
  > svg {
    z-index: 2;
    width: 100%;
    height: auto;
  }
  @media(max-width: 768px){
    display: none;
  }
`