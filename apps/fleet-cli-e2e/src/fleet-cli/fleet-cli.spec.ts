import { execSync } from 'child_process';
import { join } from 'path';

describe('CLI tests', () => {
  const executeCommand = (args?: string): string => {
    const cliPath = join(process.cwd(), 'dist/apps/fleet-cli');
    const cliArguments = args ? ` ${args}` : '';
    return execSync(`node ${cliPath}${cliArguments}`).toString();
  };

  it('should create a fleet', () => {
    expect(executeCommand('create fleet-1')).toMatchSnapshot();
  });

  it('should register a vehicle', () => {
    const validCommand = 'register-vehicle fleet-1 AA-123-AA';

    // valid cases
    expect(executeCommand(validCommand)).toMatchSnapshot();

    // error cases
    expect(executeCommand(validCommand)).toMatchSnapshot('Already registered');
    expect(
      executeCommand('register-vehicle fleet-2 AA-123-AA')
    ).toMatchSnapshot();
    expect(
      executeCommand('register-vehicle fleet-1 invalid-plate')
    ).toMatchSnapshot();
  });

  it('should localize a vehicle', () => {
    // valid cases
    expect(
      executeCommand(`localize-vehicle fleet-1 AA-123-AA 23 87`)
    ).toMatchSnapshot();
    expect(
      executeCommand('localize-vehicle fleet-1 AA-123-AA 23 87 40')
    ).toMatchSnapshot();

    // error cases
    expect(
      executeCommand('localize-vehicle fleet-1 BB-123-BB 23 87')
    ).toMatchSnapshot();
    expect(
      executeCommand('localize-vehicle fleet-1 BB-123-BB 23 200')
    ).toMatchSnapshot();
    expect(
      executeCommand('localize-vehicle fleet-1 BB-123-BB 99 87')
    ).toMatchSnapshot();
  });
});
