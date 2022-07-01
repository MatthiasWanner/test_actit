import { tailwindColors, tailwindNuances, tailwindSizes } from '../constants';

/**
 * @param min minimum interval (included)
 * @param max maximum interval (excluded)
 * @returns integer included between min and max params
 */
export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomArrayOutput = <T>(array: T[]) =>
  array[getRandomInt(0, array.length)];

export const randomizeTailwindColor = () =>
  getRandomArrayOutput(tailwindColors);

export const randomizeTailwindNuance = () =>
  getRandomArrayOutput(tailwindNuances);

export const randomizeTailwindSize = () => getRandomArrayOutput(tailwindSizes);
