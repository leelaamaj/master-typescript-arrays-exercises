function getLongestElement(arr: string[]): string {
  return arr.reduce((longest,word)=>word.length>longest.length?word:longest,"");
}

export {};
