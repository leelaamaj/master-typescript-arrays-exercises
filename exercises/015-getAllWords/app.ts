function getAllWords(str: string): string[] {
  return str === "" ? [] : str.split(" ");
}

export {};
