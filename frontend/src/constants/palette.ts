type paletteType = {
  [index: string]: {
    default: string;
    light: string;
  };
};

const PALETTE: paletteType = {
  RED: { default: '#FF9191', light: '#FFB2B2' },
  ORANGE: { default: '#FF7A00', light: '#FFA25F' },
  YELLOW: { default: '#FFD362', light: '#FFDD86' },
  GREEN: { default: '#A6E773', light: '#C8FF9D' },
  BLUE: { default: '#93F1F7', light: '#C6FCFF' },
  PURPLE: { default: '#E2AAFD', light: '#EDC7FF' },
  PINK: { default: '#FFADD9', light: '#FFC1E3' },
  GRAY: { default: 'lightgray', light: 'lightgray' },
};

export default PALETTE;
