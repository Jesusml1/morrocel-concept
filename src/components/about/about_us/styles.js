import styled from 'styled-components'


export const Wrapper = styled.div`
  background-color: var(--Moon-Mist);
  height: auto;
  width: 100%;
  padding: 2rem 5%;



`

export const Container = styled.div`

  h1{
    font-family: Righteous, Arial;
    color: var(--Cocoa-Bean);
    font-size: 34px;
  }

  :nth-of-type(2){
    padding: 0 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  :nth-of-type(2){
    p{
      margin-right: 3rem;
    }
  }

  :nth-of-type(3){
    padding: 0 6rem;
  }

  img{
    margin-left: 2rem;
    border-radius: 1.2rem;
    box-shadow:
      0 3.1px 5.3px rgba(0, 0, 0, 0.054),
      0 10.5px 17.9px rgba(0, 0, 0, 0.066),
      0 47px 80px rgba(0, 0, 0, 0.07);
    align-self: flex-end;
  }

`

export const Text = styled.div`

  h3{
    color: var(--Cocoa-Bean);
    font-family: Righteous, Arial;
    font-size: 30px;
  }

  p{
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    
  }

  

`