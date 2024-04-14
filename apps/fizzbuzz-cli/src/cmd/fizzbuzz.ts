export interface FizzbuzzCommand {
  /**
   * Execute the fizzbuzz algorithm on a given range (from 1 to max).
   *
   * @param max the max value
   * @param fizzValue the fizz value
   * @param buzzValue the buzz value
   */
  execute(max: number, fizzValue: number, buzzValue: number): void;
}
