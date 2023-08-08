import { FC } from 'react';

import { LaptopSlider } from './components/laptop-slider';

import { TabletSlider } from './components/tablet-slider';

import { windowSizes } from 'consts';
import { useWindowSize } from 'hooks/use-window-size';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export const Slider: FC<{ images: string[] }> = ({ images }) => {
  const { width } = useWindowSize();
  const isSmallScreen = width && width <= windowSizes.tablet;

  return isSmallScreen ? <TabletSlider images={images} /> : <LaptopSlider images={images} />;
};
