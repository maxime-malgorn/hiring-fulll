import { fizzbuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
  it.each`
    n     | expected
    ${0}  | ${'FizzBuzz'}
    ${1}  | ${'1'}
    ${2}  | ${'2'}
    ${3}  | ${'Fizz'}
    ${4}  | ${'4'}
    ${5}  | ${'Buzz'}
    ${15} | ${'FizzBuzz'}
  `('should compute default fizzbuzz for number $n', ({ n, expected }) => {
    expect(fizzbuzz(n)).toEqual(expected);
  });

  it.each`
    n     | expected
    ${0}  | ${'FizzBuzz'}
    ${1}  | ${'1'}
    ${2}  | ${'Fizz'}
    ${3}  | ${'3'}
    ${4}  | ${'Fizz'}
    ${5}  | ${'5'}
    ${6}  | ${'Buzz'}
    ${12} | ${'FizzBuzz'}
  `('should compute custom fizzbuzz for number $n', ({ n, expected }) => {
    expect(fizzbuzz(n, { fizzValue: 2, buzzValue: 6 })).toEqual(expected);
  });
});
