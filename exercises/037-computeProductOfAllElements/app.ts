function computeProductOfAllElements(arr: number[]): number {
  return arr.length ? arr.reduce((product,value)=>product*value,1) : 0;
}

export {};
