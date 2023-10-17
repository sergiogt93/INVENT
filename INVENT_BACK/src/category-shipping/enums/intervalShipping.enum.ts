export enum ACRONYMS_SHIPPING {
  MAXLIGHT = 'MAXLIGHT',
  LIGHT = 'LIGHT',
  STANDARD = 'STANDARD',
  HEAVY = 'HEAVY',
  LARGEVOLUM = 'LARGE_VOLUMEN',
}

export const calculatePrice = {
  [ACRONYMS_SHIPPING.MAXLIGHT]: (weight: number) => {
    return weight * 5;
  },
  [ACRONYMS_SHIPPING.LIGHT]: (weight: number) => {
    return (weight * 5) % 1;
  },
  [ACRONYMS_SHIPPING.STANDARD]: (weight: number) => {
    return weight * 10;
  },
  [ACRONYMS_SHIPPING.HEAVY]: (weight: number) => {
    return ((weight * 5) % weight) + 75;
  },
  [ACRONYMS_SHIPPING.LARGEVOLUM]: (weight: number) => {
    return (weight - 10) * 7.5 + 130 + weight;
  },
};
