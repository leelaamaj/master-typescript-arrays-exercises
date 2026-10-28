function transposeMatrix(matrix: unknown[][]): unknown[][] {
  if(matrix.length===0) return []; return matrix[0].map((_,col)=>matrix.map(row=>row[col]));
}

export {};
