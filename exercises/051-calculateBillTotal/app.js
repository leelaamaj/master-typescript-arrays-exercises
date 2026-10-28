"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateBillTotal(preTaxAndTipAmount) {
    return preTaxAndTipAmount + preTaxAndTipAmount * 0.095 + preTaxAndTipAmount * 0.15;
}
