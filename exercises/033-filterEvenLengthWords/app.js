"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterEvenLengthWords(words) {
    return words.filter(word => word.length % 2 === 0);
}
