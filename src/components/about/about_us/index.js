
import { Wrapper,
         Container,
         Text } from './styles'
 

export default function AboutUs() {
  return(
    <Wrapper>
      <Container>
        <h1>Quienes Somos</h1>
      </Container>
      <Container>
        <Text>
          <h3>Sobre nosotros</h3>
          <p>Morrocel fue creada a finales de  la década de los 70,  y no es sino hasta el 20 de Marzo de 1987 que inicia formalmente sus operaciones constituyéndose como una compañía  anónima.  Desde su fundación, Morrocel se ha dedicado a  la manufactura de empaques flexibles, y en sus años de funcionamiento ha incursionado con  éxito  en el mercado nacional e internacional. Nuestro proceso productivo sigue estándares de calidad basados en la norma ISO 9001 – 2015 y sus sistemas integrados incorporan la seguridad y salud en el trabajo, la gestión ambiental, la seguridad alimentaria y la responsabilidad social.</p>
        </Text>
        <img src="./about/calle.jpg"
             alt="calle-morrocel"
             height="300"
             width="240" />
      </Container>
      <Container>
        <Text>
          <h3>Politica de Calidad</h3>
          <p>Nuestro compromiso es garantizar y aumentar el grado de satisfacción de los requerimientos y expectativas de nuestros Clientes y demás partes interesadas, considerando el contexto de la organización, promoviendo el pensamiento basado en riesgos, apoyando su dirección estratégica, mediante la participación de un equipo humano capacitado, con alta tecnología, asegurando la eficacia y la mejora del Sistema de Gestión de la Calidad, con sus procesos, productos y servicios, a través del Desarrollo, Fabricación y Comercialización de Empaques Flexibles en el mercado nacional e internacional,  preservando la Salud y la Seguridad Laboral de nuestros trabajadores, aplicando un Plan que garantice la Inocuidad  de nuestros productos y contribuyendo con el Medio Ambiente.</p>
        </Text>
      </Container>
    </Wrapper>
  )
}