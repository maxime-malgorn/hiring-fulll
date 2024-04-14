import { defaultFizzBuzzConfig } from './config';

/**
 * Apply the fizzbuzz game rules to a number.
 * It helps children to teach them about division.
 *
 * @param n number to process
 * @param config configuration to apply
 * @returns fizzbuzz computed value
 */
export const fizzbuzz = (n: number, config = defaultFizzBuzzConfig): string => {
  const { fizzValue, buzzValue } = config;
  if (n % (fizzValue * buzzValue) === 0) {
    return 'FizzBuzz';
  }
  if (n % buzzValue === 0) {
    return 'Buzz';
  }
  if (n % fizzValue === 0) {
    return 'Fizz';
  }
  return n.toString();
};
