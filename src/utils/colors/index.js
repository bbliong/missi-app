export const mainColors = {
  white: '#ffffff',
  red: '#C92123',
  redSoft: '#FEDCDD',
  black100WOp70: 'rgba(35,38,41,.7)',
  white100WOp70: 'rgba(255,255,255,.7)',
  white100: '#FFFFFF',
  white90: '#F6F6F6',
  white80: '#E5E5E5',
  white70: '#CACBCC',
  white60: '#ABADAE',
  black100: '#232629',
  black90: '#5A5C5F',
  black80: '#77787A',
  black70: '#888A8B',
  black60: '#ABADAE',
  gold100: '#D4AE40',
  gold90: '#D4AF73',
  gold80: '#E1C493',
  gold70: '#EEDAB8',
  gold60: '#F5EFE3',
};

export const colors = {
  primary: mainColors.gold100,
  white: mainColors.white100,
  black: mainColors.black100,
  text: {
    primary: mainColors.black100,
    secondary: mainColors.black90,
    menuActive: mainColors.black100,
    menuInactive: mainColors.black70,
    disabled: mainColors.black60,
  },
  button: {
    primary: {
      backgroundColor: mainColors.gold100,
      borderColor: mainColors.gold100,
      color: mainColors.white100,
    },
    primaryOutline: {
      borderColor: mainColors.gold100,
      border: 1,
      borderRadius: 4,
      backgroundColor: mainColors.white100,
      color: mainColors.gold100,
    },
    primaryOutlineTransparant: {
      borderColor: mainColors.gold100,
      border: 1,
      borderRadius: 4,
      backgroundColor: mainColors.gold60,
      color: mainColors.gold100,
    },
    primaryDisable: {
      borderColor: mainColors.gold70,
      backgroundColor: mainColors.gold70,
      color: mainColors.white90,
    },
    disable: {
      backgroundColor: mainColors.black60,
      borderColor: mainColors.black60,
      color: mainColors.white100,
    },
    google: {
      backgroundColor: mainColors.white,
      borderColor: mainColors.black70,
      color: mainColors.black90,
    },
  },
  span: {
    primary: {
      backgroundColor: mainColors.gold60,
      color: mainColors.gold100,
    },
  },
  border: mainColors.black60,
};
