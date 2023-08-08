import { FC } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ImageContainer } from '../slider.style';

import { keyExtractor } from 'utils/key-extractor';

import 'swiper/css';
import 'swiper/css/pagination';

export const TabletSlider: FC<{ images: string[] }> = ({ images }) => (
  <ImageContainer>
    <Swiper
      spaceBetween='30'
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='dotted-slider'
    >
      {images.map((item, index) => (
        <SwiperSlide key={keyExtractor(index)}>
          <img src={item} alt={`Slide${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  </ImageContainer>
);
