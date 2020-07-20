import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);



export default function Carousel() {
  return (<>
    
    <Swiper
      
      
      navigation
      spaceBetween={10}
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
    
  </>);
};
