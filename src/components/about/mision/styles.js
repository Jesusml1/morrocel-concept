import styled from 'styled-components'


export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 3rem 10% ;
  background-color: var(--Kangaroo);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  img{
    margin-left: 2rem;
    border-radius: 1.2rem;
    box-shadow:
      0 3.1px 5.3px rgba(0, 0, 0, 0.054),
      0 10.5px 17.9px rgba(0, 0, 0, 0.066),
      0 47px 80px rgba(0, 0, 0, 0.07);
    
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  
  h3{
    color: var(--Cocoa-Bean);
    font-family: Righteous, Arial;
    font-size: 30px;
    margin: 0;
  }
  p{
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    width: 80%; 
    text-align: right;
  }
`