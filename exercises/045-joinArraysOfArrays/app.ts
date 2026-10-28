function joinArrayOfArrays(arr: unknown[]): unknown[] {
  let result: unknown[]=[]; for(const row of arr) {result=result.concat(row);} return result;
}

export {};
