function countCharacter(str: string, char: string): number {
  let count=0; for (const letter of str) { if(letter === char) count++; } return count;
}

export {};
