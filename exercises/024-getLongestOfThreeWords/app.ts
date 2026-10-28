function getLongestOfThreeWords(word1: string, word2: string, word3: string): string {
  let result=word1; for(const word of [word2,word3]) {if(word.length>result.length) result=word;} return result;
}

export {};
