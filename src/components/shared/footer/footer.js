import styled from 'styled-components'

// SUBFOOTER

export const SubFooter = styled.div`
  height: 60vh;
  width: 100%;
  background-color: var(--Battleship-Gray);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media(max-width: 768px){
    flex-direction: column;
    height: auto;
    padding: 2rem 0;
  }
`
export const NavLinks = styled.ol`
  list-style: none;
  @media(max-width: 768px){
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
`
export const NavLink = styled.li`
  padding: 1rem 0;
  > a {
    text-decoration: none;
    color: white;
    font-family: Roboto,'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
  }


`


export const Direction = styled.div`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  color: var(--White);
  text-align: right;
  font-size: 1.2rem;

  @media(max-width: 768px){
    text-align: center;
    font-size: 0.9rem;
    margin: 1.4rem;
  }
`










// MAINFOOTER

export const MainFooter = styled.div`
  height: 40vh;
  width: 100%;
  background-color: var(--Rangitoto);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media(max-width: 768px){
    flex-direction: column;
    height: auto;
    padding: 2rem 0;
  }

`
export const BrandLogo = styled.div`

  color: white;
  font-family: Righteous, Arial, Helvetica, sans-serif;
  h2 {
    padding: 0;
    margin: 0;
    strong{
      font-size: 2rem;
    }
  }
  h4{
    margin: 0;
  }

  @media(max-width: 768px){
    text-align: center;
  }

`


export const SocialMedia = styled.div`
@media(max-width: 768px){
    padding-top: 2rem;
  }
`



export const IconList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
  @media(max-width: 768px){
    justify-content: center;
    padding: 0;
  }
`
export const Icon = styled.li`
 padding: 0 0.6rem;
 img{
   transform: scale(1.2);
   filter: invert(.9) brightness(200%);
 }
`
export const Email = styled.div`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  color: white;
  font-size: 1.2rem;
`

export const Disaclimer = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  p{
    text-align: center;
  }
  a{
    color: white;
  }
`