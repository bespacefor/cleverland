export interface ITheme {
  colors: {
    main: {
      accent: string;
      white: string;
      dark: string;
      dark30: string;
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
    mobileH3: string;
    h4: string;
    h5: string;
    desktopH5: string;
    h5Tablet: string;
    subtitleLarge: string;
    subtitleSmall: string;
    span: string;
    bodySmall: string;
    bodySmallTwo: string;
    bodyLarge: string;
    bodyMedium: string;
    bodyMediumText: string;
    infoSmall: string;
    infoLarge: string;
    normal: string;
    bodySubtitle: string;
    buttonSmall: string;
    buttonLarge: string;
  };
  media: {
    laptop: string;
    tablet: string;
    mobile: string;
  };
}
