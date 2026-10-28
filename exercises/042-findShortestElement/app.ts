function findShortestElement(arr: string[]): string {
  return arr.length ? arr.reduce((shortest,word)=>word.length<shortest.length?word:shortest) : "";
}

export {};
