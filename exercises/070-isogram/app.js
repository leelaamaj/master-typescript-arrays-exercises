"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isIsogram(text) {
    const lower = text.toLowerCase();
    return new Set(lower).size === lower.length;
}
