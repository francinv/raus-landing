export const sortAlphabetically = (arr: string[]): string[] =>
  arr.sort((a, b) => a.localeCompare(b));
