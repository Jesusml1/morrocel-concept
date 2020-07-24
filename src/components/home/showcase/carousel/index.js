import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'

SwiperCore.use([Navigation]);

const Wrapper = styled.div`
  padding: 2rem 10%;
  width: 100%;
`


export default function Carousel() {
  return (<>
    <Wrapper>
      <Swiper
        navigation
        spaceBetween={2}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
        <img src='./showcase/arauca.jpg' width='250' height='250'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='./showcase/pepsi.jpg' width='250' height='250'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='./showcase/pepito.jpg' width='250' height='250'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='./showcase/pepsi.jpg' width='250' height='250'></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='./showcase/arauca.jpg' width='250' height='250'></img>
        </SwiperSlide>
        
      </Swiper>
    </Wrapper>
    
    <style jsx>
      {`
        img{
          border-radius: 20px;
        }
      `}
    </style>
  </>);
};
