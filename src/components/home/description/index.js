import { DescriptionWrapper,
         DescriptionText, 
         Cover, } from './wrapper_description'


export default function Description(){
  return(
    <DescriptionWrapper>
      <DescriptionText>
        Morrocel sé ha dedicado a la producción de empaques flexibles, y en sus años de funcionamiento ha incursionado con éxito en el mercado nacional e internacional.
      </DescriptionText>
      <Cover>
        <svg width="1440" height="326" viewBox="0 0 1440 326" fill="none"         xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 326L0 326L955.744 256.5L1242.07 181.5L1440 0V326Z" fill="#2B3323"/>
      </svg>

      </Cover>
    </DescriptionWrapper>
  )
}