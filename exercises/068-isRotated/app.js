"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isRotated(str1, str2) {
    return str1.length === str2.length && (str1 + str1).includes(str2);
}
