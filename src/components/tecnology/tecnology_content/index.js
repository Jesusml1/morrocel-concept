import { Wrapper,
         TitleContainer,
         ShareContainer,
         AloneContainer,
         Text, } from './styles'


export default function TecnologyContent(){
  return(
    <Wrapper>
      <TitleContainer>
        <h1>Tecnología</h1>
      </TitleContainer>
      <ShareContainer>
        <Text>
          <h3>Laminación Solvent-Less</h3>
          <p>Proceso mediante el cual se combinan dos o mas sustratos usando Adhesivos 100% Solidos que no emplean Solventes de dilución de allí su nombre de SIN SOLVENTE. Este proceso de laminación es el  idóneo y recomendado en la manufactura de Empaques Flexibles destinado a contener Alimentos ya que se elimina la presencia de solventes residuales y no se afecta las propiedades Organolépticas del producto envasado. </p>
        </Text>
        <img src="./tecnology/tecno_1.jpg"
             alt="varicoater"
             width="400"
             height="275" />
      </ShareContainer>
      <AloneContainer>
        <h3>Laminación por Extrusión Coating</h3>
        <p>Proceso de Laminación mediante el cual se unen dos sustratos por medio de la aplicación directa de una película plástica de Poliolefina en estado fundido  que al enfriarse actúa como unión entre los sustratos confiriendo adicionalmente propiedades de barrera al vapor de agua y resistencia mecánica. También se puede usar como Recubrimiento cuando se aplica directamente en la superficie de un sustrato  para conferirle propiedades de sellabilidad y barrera al vapor de agua.</p>
        <h3>Laminación Base Solvente</h3>
        <p>Se reviste uno de los sustratos con adhesivo, cuya base es solvente, se pasa por un túnel de secado donde se evapora el solvente, y luego ya seco pasa por el rodillo laminador donde se une la otra película.</p>
      </AloneContainer>
      <ShareContainer>
        <Text>
          <h3>Laminación Solvent-Less</h3>
          <p>Proceso mediante el cual se combinan dos o mas sustratos usando Adhesivos 100% Solidos que no emplean Solventes de dilución de allí su nombre de SIN SOLVENTE. Este proceso de laminación es el  idóneo y recomendado en la manufactura de Empaques Flexibles destinado a contener Alimentos ya que se elimina la presencia de solventes residuales y no se afecta las propiedades Organolépticas del producto envasado. </p>
        </Text>
        <img src="./tecnology/tecno_2.jpg"
             alt="varicoater"
             width="400"
             height="275" />
      </ShareContainer>
    </Wrapper>
  )
}