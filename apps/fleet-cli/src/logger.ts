export const logSuccess = (message: string): void =>
  console.log(`✔ ${message}`);

export const logError = (message: string, cause?: Error): void =>
  console.log(`❌ ${message}`, cause ? `(${cause})` : null);
