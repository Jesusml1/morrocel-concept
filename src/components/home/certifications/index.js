import styled from 'styled-components'


const CertWrapper = styled.div`

  width: 100%;
  height: 50vh;
  background-color: var(--Moon-Mist);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media(max-width: 768px) {
    flex-direction: column;
    height: 80vh;
    > img {
      transform: scale(0.8);
    }
  }
` 

const Title = styled.div`
  display: none;
  width: 100%;
  height: 15vh;
  background-color: var(--Rangitoto);
  justify-content: center;
  align-items: center;
  font-family: Righteous, Arial;
  font-size: 2rem;
  color: var(--White);
  @media(max-width: 768px){
    display: flex;
  }

`

export default function Certifications(){
  return(<>
    <Title>Certificaciones</Title>
    <CertWrapper>
      <img src='./certifications/certificado_iqnet.png'
           height='98'
           width='324'  />
      <img src='./certifications/certificado_iso.png'
           height='166'
           width='126' />
    </CertWrapper>
  </>)
}