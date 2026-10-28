function getLongestWordOfMixedElements(arr: unknown[]): string {
  const words=arr.filter((value): value is string=>typeof value === "string"); return words.reduce((longest,word)=>word.length>longest.length?word:longest,"");
}

export {};
