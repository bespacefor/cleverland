export interface ITheme {
  colors: {
    main: {
      accent: string;
      white: string;
      dark: string;
      dark30: string;
    };
    grey: {
      black40: string;
      black43: string;
      black20: string;
      black42: string;
      black5: string;
    };
    button: {
      pressed: string;
      hover: string;
    };
  };
  fonts: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    subtitleLarge: string;
    subtitleSmall: string;
    bodyLarge: string;
    bodySmall: string;
    infoLarge: string;
    infoSmall: string;
    buttonLarge: string;
    buttonSmall: string;
    mobileH1: string;
    mobileH2: string;
    mobileH3: string;
    mobileBodyLarge: string;
    mobileBodySmall: string;
    mobileButtonLarge: string;
    mobileButtonSmall: string;
  };
  media: {
    laptop: string;
    tablet: string;
    mobile: string;
  };
}
