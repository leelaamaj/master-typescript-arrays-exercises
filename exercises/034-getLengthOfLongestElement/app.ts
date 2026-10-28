function getLengthOfLongestElement(arr: string[]): number {
  return arr.reduce((longest,word)=>Math.max(longest,word.length),0);
}

export {};
