function flipPairs(input: string): string {
  let result=""; for(let i=0;i<input.length;i+=2) result+=(input[i+1] || "")+input[i]; return result;
}

export {};
