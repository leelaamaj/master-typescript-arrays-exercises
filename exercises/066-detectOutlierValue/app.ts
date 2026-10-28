function detectOutlierValue(string: string): number {
  const values=string.trim().split(" ").filter(value=>value!=="").map(Number); const even=values.filter(value=>value%2===0).length; const seekEven=even===1; return values.findIndex(value=>(value%2===0)===seekEven)+1;
}

export {};
