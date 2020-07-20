import styled from 'styled-components'

export const SubWrapper = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #E8E9E1;
  height: 4rem;
  
  @media(max-width: 768px){
    display: none;
  }
`