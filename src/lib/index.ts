export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function mergeObjects<T extends Record<string, unknown>>(...objects: T[]): T {
  return Object.assign({}, ...objects);
}
