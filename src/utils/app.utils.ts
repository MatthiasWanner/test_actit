import { IBubbleProps } from '../types';

/**
 * @description Generate automatically an id according to bubble props
 *
 * @param bubbleProps
 * @param index
 * @returns string like 'blue_500_12_2847' corresponding unique component key
 */
export const getBubbleId = (bubbleProps: IBubbleProps, index: number) =>
  `${Object.values(bubbleProps).join('_')}_${index}`;
