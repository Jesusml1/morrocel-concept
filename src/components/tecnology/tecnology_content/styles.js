import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--Moon-Mist);
  height: auto;
  width: 100%;
`

export const TitleContainer = styled.div`
  h1{
    margin: 0;
    padding: 2rem 5%;
    font-family: Righteous;
    color: var(--Cocoa-Bean);
    @media(max-width: 768px){
      padding: 1rem 4%;
      font-size: 2.4rem;
    }
  }
` 
export const ShareContainer = styled.div`

  padding: 2rem 9%;
  display: flex;
  flex-direction: row;
  align-items: center;
  img{
    border-radius: 20px;
    box-shadow: 
      0 3.1px 5.3px rgba(0, 0, 0, 0.054),
      0 10.5px 17.9px rgba(0, 0, 0, 0.066),
      0 47px 80px rgba(0, 0, 0, 0.07);
    
    @media(max-width: 768px){
      transform: scale(0.8);
      z-index: 1;
    }
  }
  @media(max-width: 768px){
      flex-direction: column;
      padding: 1rem 4%;
    }
`

export const AloneContainer = styled.div`
  padding: 2rem 9%;
  
  h3{
    font-size: 30px;
    font-family: Righteous, Arial, Helvetica, sans-serif;;
    color: var(--Cocoa-Bean);
  }
  p{
    font-size: 1.2rem;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    padding-bottom: 2rem;
  }
  @media(max-width: 768px){
    padding: 1rem 4%;
  }
`

export const Text = styled.div`
  padding-right: 5%;
  h3{
    font-family: Righteous;
    color: var(--Cocoa-Bean);
    font-size: 30px;
    @media(max-width: 768px){
    margin-top: 0;
  }
  }
  p{
    font-size: 1.2rem;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
  }
  @media(max-width: 768px){
    padding: 0;
  }
`
