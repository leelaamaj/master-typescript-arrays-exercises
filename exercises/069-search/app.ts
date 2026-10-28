function search(array: number[], value: number): number | null {
  let low=0,high=array.length-1; while(low<=high){const mid=Math.floor((low+high)/2); if(array[mid]===value) return mid; if(array[mid]<value) low=mid+1; else high=mid-1;} return null;
}

export {};
