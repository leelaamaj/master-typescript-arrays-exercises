"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isOddWithoutModulo(num) {
    return Number.isInteger(num) && !Number.isInteger(num / 2);
}
