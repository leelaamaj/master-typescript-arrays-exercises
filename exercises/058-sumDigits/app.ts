function sumDigits(num: number): number {
  const digits=String(Math.abs(num)).split("").map(Number); let total=0; for(let i=0;i<digits.length;i++) total+=(i===0 && num<0 ? -digits[i] : digits[i]); return total;
}

export {};
