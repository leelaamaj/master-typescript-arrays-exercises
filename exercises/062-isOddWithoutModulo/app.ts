function isOddWithoutModulo(num: number): boolean {
  return Number.isInteger(num) && !Number.isInteger(num/2);
}

export {};
