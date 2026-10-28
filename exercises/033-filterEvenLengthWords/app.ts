function filterEvenLengthWords(words: string[]): string[] {
  return words.filter(word=>word.length%2===0);
}

export {};
