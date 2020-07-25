import styled from "styled-components";



export const Wrapper = styled.div`
  background-color: var(--Moon-Mist);
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleContainer = styled.div`
  padding: 2rem 5%;
  align-self: flex-start;
  h1{
    font-family: Righteous, Arial, Helvetica, sans-serif;
    color: var(--Cocoa-Bean);
    font-size: 34px
  }
  @media(max-width: 768px){
    padding: 1.4rem 2%;
    align-self: flex-start;
  }
  
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 9%;
  height: auto;

  p{
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.6rem;
    align-self: center;
    color: var(--Cocoa-Bean);
    width: 40vw;
  }
  img{
    align-self: flex-end;
  }

  @media(max-width: 768px){
    flex-direction: column;
    width: 100%;
    white-space: normal;
    p{
      padding: 0;
      width: 100%;
      font-size: 1.2rem;
      
    }
    img{
      transform: scale(0.7);
      align-self: center;
    }
  }
`









export const Form = styled.form`
  display: grid;
  width: 50vw;
  padding: 3rem 0;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: 
    "name name . email email"
    "msg msg msg msg msg"
    "msg msg msg msg msg"
    ". . . . btn";


  @media(max-width: 768px){
    grid-template-columns: 1fr;
    grid-template-rows: 15vh 15vh 40vh 10vh;
    grid-template-areas: 
    "name"
    "email"
    "msg"
    "btn";
    width: 100%;
    padding: 2rem 1rem;
    align-items: center;
  }
`

export const NameInput = styled.div`
  grid-area: name;
  display: flex;
  flex-direction: column;
  
  
  input{
     width: 100%;
     height: 2.2rem;
     background-color: var(--Clear-Beige);
     border-radius: 1rem;
     border: none;
   }
   label{
     font-family: Montserrat, Arial, Helvetica, sans-serif;
     margin-bottom: 1rem;
   }
`

export const EmailInput = styled.div`
  grid-area: email;
  display: flex;
  flex-direction: column;
  
  input{
    width: 100%;
    height: 2.2rem;
    background-color: var(--Clear-Beige);
    border-radius: 1rem;
    border: none;
  }
  label{
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    margin-bottom: 1rem;
  }
`

export const MessageArea = styled.div`
  grid-area: msg;
  display: flex;
  flex-direction: column;
   
  textarea{
    background-color: var(--Clear-Beige);
    width: 100%;
    height: 30vh;
    border: none;
    border-radius: 1rem;
    
    @media(max-width: 768px){
      width: 100%;
    }

  }
  label{
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    margin-bottom: 1rem;
  }
  @media(max-width: 768px){
      width: 100%;
      padding: 0;
    }
`

export const FormButton = styled.div`
  grid-area: btn;
  padding: 2rem 0;
  @media(max-width: 768px){
    width: 100%;
  }
  button{
    height: 2rem;
    width: 100%;
    border: none;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    background-color: var(--Clear-Beige);
    transition: color .2s ease;
    cursor: pointer;
    border-radius: 1rem;
    :hover{
      background-color: var(--Rangitoto);
      color: var(--Clear-Beige);
      font-weight: bold;
    }
    @media(max-width: 768px){
      width: 100%;
    }
  }
`