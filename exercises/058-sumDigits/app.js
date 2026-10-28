"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumDigits(num) {
    const digits = String(Math.abs(num)).split("").map(Number);
    let total = 0;
    for (let i = 0; i < digits.length; i++)
        total += (i === 0 && num < 0 ? -digits[i] : digits[i]);
    return total;
}
