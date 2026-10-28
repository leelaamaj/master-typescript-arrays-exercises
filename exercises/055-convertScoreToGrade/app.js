"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertScoreToGrade(score) {
    if (score < 0 || score > 100)
        return "INVALID SCORE";
    if (score >= 90)
        return "A";
    if (score >= 80)
        return "B";
    if (score >= 70)
        return "C";
    if (score >= 60)
        return "D";
    return "F";
}
