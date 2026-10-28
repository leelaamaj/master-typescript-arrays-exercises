function calculateBillTotal(preTaxAndTipAmount: number): number {
  return preTaxAndTipAmount + preTaxAndTipAmount*0.095 + preTaxAndTipAmount*0.15;
}

export {};
