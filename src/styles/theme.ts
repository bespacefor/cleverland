import { ITheme } from '../interfaces/styled';

export const baseTheme: ITheme = {
  colors: {
    main: {
      accent: '#FF5253',
      white: '#FFFFFF',
      dark: '#363636',
      dark30: '#3636364D'
    },
    button: {
      pressed: 'linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%)',
      hover: 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)'
    }
  },
  fonts: {
    h1: 'medium 52px/64px Montserrat',
    h2: '500 44px/54px Montserrat',
    h3: '700 32px/40px Montserrat',
    mobileH3: '700 18px/28px Montserrat',
    h4: '700 24px/30px Montserrat',
    h5: 'bold 22px/32px Montserrat',
    desktopH5: '700 18px/28px Montserrat',
    h5Tablet: '700 12px/18px Montserrat',
    subtitleLarge: '600 16px/24px Montserrat',
    subtitleSmall: '600 14px/18px Montserrat',
    span: '400 14px/24px Montserrat',
    bodySmall: '400 14px/18px Montserrat',
    bodySmallTwo: '400 12px/18px Montserrat',
    bodyLarge: '400 16px/24px Montserrat',
    bodyMedium: '400 15px/24px Montserrat',
    bodyMediumText: '400 15px/20px Montserrat',
    infoSmall: '400 12px/16px Montserrat',
    infoLarge: '500 12px/16px Montserrat',
    normal: '400 16px/24px Montserrat',
    bodySubtitle: '400 16px/28px Montserrat',
    buttonSmall: '600 12px/18px Montserrat',
    buttonLarge: '600 16px/24px Montserrat'
  },
  media: {
    laptop: '(max-width: 1440px)',
    tablet: '(max-width: 768px)',
    mobile: '(max-width: 320px)'
  }
};
