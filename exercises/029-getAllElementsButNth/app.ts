function getAllElementsButNth(array: unknown[], n: number): unknown[] {
  return array.filter((_,index)=>index!==n);
}

export {};
