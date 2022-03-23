export const light = {
  alternate: {
    main: '#F2F2F2',
    dark: '#F2F2F2',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light',

  primary: {
    main: '#30306C', //buttons and buttons text
    light: '#20AB20',
    dark: '#595989', //button hover
    contrastText: '#F2F2F2',//text on buttons
  },
  secondary: {// secondary text and check icons and some highlights to some text
    light: '#20AB20',//almost not used
    main: '#30306C',//mostly used in small text
    dark: '#20AB20',//almost not used
    contrastText: 'rgba(0, 0, 0, 0.87)',//almost not used
  },
  text: {
    primary: '#30306C',
    secondary: '#30306C',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#F2F2F2',
    default: '#F2F2F2',
    level2: '#F2F2F2',
    level1: '#F2F2F2',
  },
};

export const dark = {
  alternate: {
    main: '#1a2138',
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#F2F2F2',
  },
  mode: 'dark',
  primary: {
    main: '#30306C', //buttons and buttons text
    // light: '#20AB20',
    dark: '#202049', //button hover
    contrastText: '#F2F2F2',//text on buttons
  },
  secondary: {
    light: '#FFEA41',
    main: '#FFE102',
    dark: '#DBBE01',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#F2F2F2',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212 ',
    default: '#222B45',
    level2: '#333',
    level1: '#2D3748',
  },
};
