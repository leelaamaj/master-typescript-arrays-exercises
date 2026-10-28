function findShortestWordAmongMixedElements(arr: unknown[]): string {
  const words=arr.filter((value): value is string=>typeof value === "string"); return words.length ? words.reduce((shortest,word)=>word.length<shortest.length?word:shortest) : "";
}

export {};
