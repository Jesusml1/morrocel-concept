import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--Moon-Mist);
  height: auto;
  width: 100%;
  padding: 3rem 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 768px){
    flex-direction: column;
    padding: 2rem 1.4rem;
  }
`

export const Text = styled.div`
  max-width: 50%;
  h3{
    color: var(--Cocoa-Bean);
    font-family: Righteous, Arial;
    font-size: 30px;
    margin: 0;
  }
  :nth-child(2){
    text-align: right;
  }
  :nth-child(1){
    text-align: left;
  }
  p{
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    width: 80%; 
    text-align: left;
  }
  ul{
    text-align: right;
    list-style: none;

    li{
      font-family: Montserrat, Arial, Helvetica, sans-serif;
      font-size: 1.2rem;
    }
  }
  @media(max-width: 768px){
    max-width: 100%;
    
  }
`