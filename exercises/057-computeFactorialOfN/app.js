"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function computeFactorialOfN(n) {
    let product = 1;
    for (let i = 1; i <= n; i++)
        product *= i;
    return product;
}
