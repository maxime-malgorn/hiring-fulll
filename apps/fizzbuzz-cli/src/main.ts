import { program } from 'commander';
import { FizzbuzzCommandImpl } from './cmd/fizzbuzz.impl';
import { parseNumberOption } from './parser';

program.option('--max <number>', 'max number', parseNumberOption, 100);
program.option('--fizzValue <number>', 'fizz number', parseNumberOption, 3);
program.option('--buzzValue <number>', 'buzz number', parseNumberOption, 5);
program.parse();

const { max, fizzValue, buzzValue } = program.opts();

new FizzbuzzCommandImpl().execute(max, fizzValue, buzzValue);
