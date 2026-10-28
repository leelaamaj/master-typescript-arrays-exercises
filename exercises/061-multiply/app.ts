function multiply(num1: number, num2: number): number {
  if(num1===0 || num2===0) return 0; let result=0; for(let i=0;i<Math.abs(num2);i++) result+=num1; return num2<0 ? -result : result;
}

export {};
