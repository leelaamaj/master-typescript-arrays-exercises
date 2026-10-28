"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transposeMatrix(matrix) {
    if (matrix.length === 0)
        return [];
    return matrix[0].map((_, col) => matrix.map(row => row[col]));
}
