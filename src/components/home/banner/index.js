import { BannerWrapper } from './banner_wrapper'
import { Overlay, OverlayText } from './overlay'
import { MobilePhraseWrapper, MobilePhrase } from './mobile_phrase'

export default function Banner() {
  return (
    <div style={{ height: 'auto' }}>
      <BannerWrapper>
        <Overlay>
          <OverlayText>Soluciones flexibles para empaques flexibles©</OverlayText>
        </Overlay>
      </BannerWrapper>
      <MobilePhraseWrapper>
        <MobilePhrase>
          Soluciones flexibles para empaques flexibles©
        </MobilePhrase>
      </MobilePhraseWrapper>
    </div>
  )
} 