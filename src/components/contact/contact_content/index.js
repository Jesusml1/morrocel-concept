import { Wrapper,
         TitleContainer,
         Container,
         Form,
         NameInput,
         EmailInput,
         MessageArea,
         FormButton, } from './styles'



export default function ContactContent(){
  return(
    <Wrapper>
      <TitleContainer>
        <h1>Contactanos</h1>
      </TitleContainer>
      <Container>
        <p>Si estas interesados y/o tienes alguna dudo sobre algun producto y/o servicio, sientete libre de enviar un mensaje a nuestro equipo de ventas y estaremos a la orden para asesorarte.</p>
        <img src="./contact/graphic.svg" />
      </Container>
      <Form id="form1">
        <NameInput>
            <label>Nombre:</label>
            <input required name="name" type="text"></input>
        </NameInput>
        <EmailInput>
          <label>Email:</label>          
          <input required name="email" type="email"></input>
        </EmailInput>
        <MessageArea>
          <label>Mensaje:</label>
          <textarea required type="text"></textarea>
        </MessageArea>
        <FormButton>
          <button form="form1" type="submit">Enviar</button>
        </FormButton>
      </Form>
    </Wrapper>
  )
}