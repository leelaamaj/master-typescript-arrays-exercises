function getLengthOfShortestElement(arr: string[]): number {
  return arr.length ? Math.min(...arr.map(word=>word.length)) : 0;
}

export {};
