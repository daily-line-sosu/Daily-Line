import PALETTE from '@/constants/palette';
import { DefaultTheme } from 'styled-components';

const colors = {
  primary_color: '#FF7A00',
  primary_color_light: '#FF8D23',
  gray_light: '#D9D9D9',
  text_color: '#000000',
  background_color: '#FFFFFF',
};

const sizes = {
  sm: 480,
  md: 768,
  lg: 1100,
  xl: 1440,
};

const theme: DefaultTheme = {
  colors,
  sizes,
  red: PALETTE.RED,
  orange: PALETTE.ORANGE,
  yellow: PALETTE.YELLOW,
  green: PALETTE.GREEN,
  blue: PALETTE.BLUE,
  purple: PALETTE.PURPLE,
  pink: PALETTE.PINK,
  gray: PALETTE.GRAY,
};

export default theme;
