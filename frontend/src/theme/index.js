const FONT_SIZES = [
  '12px',
  '14px',
  '16px',
  '19px',
  '24px',
  '27px',
  '36px',
  '48px',
  '80px',
]

const LINE_HEIGHTS = [
  15 / 12,
  20 / 14,
  20 / 16,
  25 / 19,
  30 / 24,
  30 / 27,
  40 / 36,
  50 / 48,
  80 / 80,
]
const SPACING = ['0px', '5px', '10px', '15px', '20px', '30px', '40px', '50px']

const BREAKPOINTS = ['320px', '641px', '769px']

const colors = {
  white: '#FFF',
  black: '#000',
  blue: '#005ea5',
  lightBlue: '#2b8cc4',
  purple: '#4c2c92',
  yellow: '#ffbf47',
  focusColor: '#ffbf47',
  crimson: '#dc143c',
  green: '#008000',
}

const theme = {
  fontSans: 'Roboto, sans-serif',
  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,
  space: SPACING,
  breakpoints: BREAKPOINTS,

  colors: colors,

  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },

  colorStyles: {
    link: {
      color: colors.blue,
      '&:focus': {
        backgroundColor: colors.focusColor,
        outline: `3px solid ${colors.focusColor}`,
      },
      '&:visited': {
        color: colors.purple,
      },
      '&:hover': {
        color: colors.lightBlue,
      },
    },
    button: {
      color: colors.white,
      backgroundColor: colors.green,
      '&:focus': {
        outline: `3px solid ${colors.focusColor}`,
      },
    },

    footerLink: {
      color: '#FFF',
      '&:focus': {
        outline: '3px solid #ffbf47',
      },
    },
  },
}

export default theme
