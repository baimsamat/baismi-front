export function respondMockResult<T>(result: T, delayMs: number = 500): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, delayMs);
  });
}
