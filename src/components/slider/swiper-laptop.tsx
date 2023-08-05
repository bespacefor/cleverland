import { FC, useState } from 'react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ImageContainer } from './slider.style';

import { keyExtractor } from 'utils/key-extractor';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export const SwiperLaptop: FC<{ images: string[] }> = ({ images }) => {
  const [activeThumbs, setActiveThumbs] = useState<any>();

  return (
    <ImageContainer>
      <Swiper
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumbs && !activeThumbs.destroyed ? activeThumbs : null }}
        className='images-slider'
      >
        {images.map((item, index) => (
          <SwiperSlide key={keyExtractor(index)}>
            <img src={item} alt={`Slide${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView='auto'
        loopedSlides={2}
        freeMode={true}
        navigation={true}
        centerInsufficientSlides={true}
        modules={[Thumbs]}
        watchSlidesProgress={true}
        onSwiper={setActiveThumbs}
        className='images-slider-thumbs'
      >
        {images.map((item, index) => (
          <SwiperSlide key={keyExtractor(index)}>
            <div className='images-slider-thumbs-wrapper'>
              <img src={item} alt={`Slide${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageContainer>
  );
};
