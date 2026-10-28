function sum(arr: number[]): number { return arr.reduce((total,value)=>total+value,0); }
function average(arr: number[]): number { return arr.length ? sum(arr)/arr.length : 0; }
export {};
