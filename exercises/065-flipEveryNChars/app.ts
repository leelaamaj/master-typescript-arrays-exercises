function flipEveryNChars(input: string, n: number): string {
  if(n<=0) return input; let result=""; for(let i=0;i<input.length;i+=n) result+=input.slice(i,i+n).split("").reverse().join(""); return result;
}

export {};
