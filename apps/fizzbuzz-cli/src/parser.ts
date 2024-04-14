import { InvalidArgumentError } from 'commander';

/**
 * Parse a number option and throw an error if the value is not a positive number.
 *
 * @param value The value to parse.
 * @returns The parsed number.
 */
export const parseNumberOption = (value: string): number => {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw new InvalidArgumentError('Value must be a positive number');
  }
  return parsedValue;
};
