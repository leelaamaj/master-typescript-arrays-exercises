function getLargestNumberAmongMixedElements(arr: unknown[]): number {
  const numbers=arr.filter((value): value is number=>typeof value === "number"); return numbers.length ? Math.max(...numbers) : 0;
}

export {};
