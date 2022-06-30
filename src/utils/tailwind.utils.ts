/**
 * @description Tailwind util function that return complete string in class html attribute.
 * Fix prod issues about dynamic classes toggle.
 *
 * @param classes all element classes
 * @returns string. All classes whitespaces separated without falsy values
 */
export const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(' ');
