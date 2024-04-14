import { execSync } from 'child_process';
import { join } from 'path';

describe('CLI tests', () => {
  const executeCommand = (args?: string): string => {
    const cliPath = join(process.cwd(), 'dist/apps/fizzbuzz-cli');
    const cliArguments = args ? ` ${args}` : '';
    return execSync(`node ${cliPath}${cliArguments}`).toString();
  };

  it('should print default fizzbuzz suite', () => {
    expect(executeCommand()).toMatchSnapshot();
  });

  it('should print fizzbuzz suite with limit', () => {
    expect(executeCommand('--max 15')).toMatchSnapshot();
  });

  it('should print fizzbuzz suite with custom values', () => {
    expect(
      executeCommand('--max 15 --fizzValue 2 --buzzValue 6')
    ).toMatchSnapshot();
  });

  it('should handle input errors', () => {
    expect(() => executeCommand('--max maxime')).toThrow(
      'Value must be a positive number'
    );
    expect(() => executeCommand('--max 0')).toThrow(
      'Value must be a positive number'
    );
    expect(() => executeCommand('--fizzValue="-10"')).toThrow(
      'Value must be a positive number'
    );
  });
});
