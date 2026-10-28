function computeCompoundInterest(principal: number, interestRate: number, compoundingFrequency: number, timeInYears: number): number {
  return principal * Math.pow(1 + interestRate/compoundingFrequency, compoundingFrequency*timeInYears) - principal;
}

export {};
