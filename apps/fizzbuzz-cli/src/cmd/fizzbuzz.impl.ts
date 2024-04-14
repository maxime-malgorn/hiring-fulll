import { FizzbuzzCommand } from './fizzbuzz';
import { fizzbuzz } from '@hiring-fulll/fizzbuzz';

export class FizzbuzzCommandImpl implements FizzbuzzCommand {
  public execute(max: number, fizzValue: number, buzzValue: number): void {
    const result = this.createRange(max).map((v) =>
      fizzbuzz(v, { fizzValue, buzzValue })
    );
    console.log(result.join(', '));
  }

  private createRange(max: number): number[] {
    return [...Array(max).keys()].map((num) => num + 1);
  }
}
