import { FC, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ImageContainer } from '../slider.style';

import { keyExtractor } from 'utils/key-extractor';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const LaptopSlider: FC<{ images: string[] }> = ({ images }) => {
  const [activeThumbs, setActiveThumbs] = useState<any>();

  return (
    <ImageContainer>
      <Swiper
        navigation={true}
        thumbs={{ swiper: activeThumbs && !activeThumbs.destroyed ? activeThumbs : null }}
        grabCursor={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='preview-main'
      >
        {images.map((item, index) => (
          <SwiperSlide key={keyExtractor(index)}>
            <img src={item} alt={`Slide${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumbs}
        slidesPerView='auto'
        loopedSlides={2}
        centerInsufficientSlides={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='preview-mini'
      >
        {images.map((item, index) => (
          <SwiperSlide key={keyExtractor(index)}>
            <div className='preview-mini-wrapper'>
              <img src={item} alt={`Slide${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageContainer>
  );
};
