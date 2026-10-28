"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLongestOfThreeWords(word1, word2, word3) {
    let result = word1;
    for (const word of [word2, word3]) {
        if (word.length > result.length)
            result = word;
    }
    return result;
}
