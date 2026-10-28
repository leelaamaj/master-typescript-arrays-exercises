"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countCharacter(str, char) {
    let count = 0;
    for (const letter of str) {
        if (letter === char)
            count++;
    }
    return count;
}
