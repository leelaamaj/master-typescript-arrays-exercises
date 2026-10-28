"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllElementsButNth(array, n) {
    return array.filter((_, index) => index !== n);
}
