import { tailwindColors, tailwindNuances, tailwindSizes } from '../constants';
import { IBubbleProps } from '../types';

/**
 * @description This function return a random integer between min and max values
 *
 * @param min minimum interval (included)
 * @param max maximum interval (excluded)
 *
 * @returns integer included between min and max params
 */
export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * @description Get a random value from an array
 *
 * @param array you want to return value
 *
 * @returns a single element included in the array passed in argument
 */
export const getRandomArrayOutput = <T>(array: T[]) =>
  array[getRandomInt(0, array.length)];

/**
 * @description Get a random Tailwind color key that compose tailwind color class (e.g: 'blue', 'pink', etc...)
 * @description https://tailwindcss.com/docs/customizing-colors
 *
 * @returns string as TailwindColor type (included in colors constant array)
 */
export const randomizeTailwindColor = () =>
  getRandomArrayOutput(tailwindColors);

/**
 * @description Get a random Tailwind nuance key that compose tailwind width or heigh class (e.g: 100, 400, etc...)
 * @description https://tailwindcss.com/docs/customizing-colors
 *
 * @returns number as TailwindNuance type (included in nuances constant array)
 */
export const randomizeTailwindNuance = () =>
  getRandomArrayOutput(tailwindNuances);

/**
 * @description Get a random Tailwind fixed size key that compose tailwind class (e.g: 4, 80, etc...)
 * @description https://tailwindcss.com/docs/width#basic-usage
 *
 * @returns number as TailwindFixedSize type (included in sizes constant array)
 */
export const randomizeTailwindSize = () => getRandomArrayOutput(tailwindSizes);

/**
 * @description Get a random Bubble component props object
 *
 * @returns object as IBubbleProps interface (color, nuance and size properties randomly)
 */
export const randomizeBubbleProps = (): IBubbleProps => ({
  color: randomizeTailwindColor(),
  nuance: randomizeTailwindNuance(),
  size: randomizeTailwindSize(),
});
