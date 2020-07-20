import styled from 'styled-components'

export const MobilePhraseWrapper = styled.div`
  display: none;
  background-color: var(--Rangitoto);
  height: 15vh;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media(max-width: 768px){
    display: flex;
  }
`

export const MobilePhrase = styled.p`
  margin: 0 2rem;
  color: var(--White);
  font-size: 1.4rem;
  font-family: Righteous;
  
`