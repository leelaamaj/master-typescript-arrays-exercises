function modulo(num1: number, num2: number): number {
  if(typeof num1!=="number" || typeof num2!=="number" || Number.isNaN(num1) || Number.isNaN(num2) || num2===0 || !Number.isFinite(num1)) return NaN; if(!Number.isFinite(num2) || num1===0) return num1; const remainder=num1-Math.trunc(num1/num2)*num2; return remainder===0 ? 0 : remainder;
}

export {};
