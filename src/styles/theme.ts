import { ITheme } from '../interfaces/styled';

export const baseTheme: ITheme = {
  colors: {
    main: {
      accent: '#FF5253',
      white: '#FFFFFF',
      dark: '#363636',
      dark30: '#3636364D'
    },
    grey: {
      black40: '#727272',
      black43: '#A7A7A7',
      black20: '#BFC4C9',
      black42: '#EBEBEB',
      black5: '#F9F9FA'
    },
    button: {
      pressed: 'linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%)',
      hover: 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)'
    }
  },
  fonts: {
    h1: '500 52px/64px Montserrat',
    h2: '600 44px/54px Montserrat',
    h3: '700 32px/40px Montserrat',
    h4: '700 24px/30px Montserrat',
    h5: '700 18px/28px Montserrat',
    subtitleLarge: '600 16px/24px Montserrat',
    subtitleSmall: '600 14px/18px Montserrat',
    bodyLarge: '400 16px/24px Montserrat',
    bodySmall: '400 14px/18px Montserrat',
    infoLarge: '500 12px/16px Montserrat',
    infoSmall: '400 12px/16px Montserrat',
    buttonLarge: '600 16px/24px Montserrat',
    buttonSmall: '600 14px/18px Montserrat',
    mobileH1: '500 32px/40px Montserrat',
    mobileH2: '600 26px/36px Montserrat',
    mobileH3: '700 18px/28px Montserrat',
    mobileBodyLarge: '400 15px/20px Montserrat',
    mobileBodySmall: '400 12px/18px Montserrat',
    mobileButtonLarge: '600 16px/20px Montserrat',
    mobileButtonSmall: '600 12px/18px Montserrat'
  },
  media: {
    laptop: '(max-width: 1440px)',
    tablet: '(max-width: 768px)',
    mobile: '(max-width: 320px)'
  }
};
